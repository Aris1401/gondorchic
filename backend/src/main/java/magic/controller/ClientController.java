package magic.controller;
import magic.model.Client;
import magic.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/clients")
public class ClientController {
    @Autowired
    private UserService userService;
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody Client user) {
        Optional<Client> registeredUser = userService.registerUser(user);
        if (registeredUser.isPresent()) {
            return ResponseEntity.ok(registeredUser.get());
        } else {
            return ResponseEntity.badRequest().body("Username or Email already exists");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Client user) {
        return userService.traiterIdentification(user.getPseudo(), user.getMotDePasse())
                .map(token -> ResponseEntity.ok().body(token))
                .orElseGet(() -> ResponseEntity.status(401).body("Pseudo ou mot de passe incorrect"));
    }
    
    @GetMapping("/informations")
    public ResponseEntity<?> obtenirInformationsClient(Authentication auth) {
        if (auth == null || !auth.isAuthenticated()) return ResponseEntity.badRequest().body("Client non connecter");

        String pseudoClient = ((UserDetails) auth.getPrincipal()).getUsername();

        Client client = userService.rechercherClientParPseudo(pseudoClient).get();
        client.setMotDePasse("");

        return ResponseEntity.ok(client);
    }
}
