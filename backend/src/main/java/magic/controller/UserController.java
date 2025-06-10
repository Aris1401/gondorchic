package magic.controller;
import magic.model.User;
import magic.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        System.out.println("TEST");
        Optional<User> registeredUser = userService.registerUser(user);
        if (registeredUser.isPresent()) {
            System.out.println("succces");
            return ResponseEntity.ok(registeredUser.get());
        } else {
            return ResponseEntity.badRequest().body("Username or Email already exists");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
        return userService.authenticate(user.getUsername(), user.getPassword())
                .map(token -> ResponseEntity.ok().body("Bearer " + token))
                .orElseGet(() -> ResponseEntity.status(401).body("Invalid username or password"));
    }
}
