package magic.service;

import magic.model.Client;
import magic.repository.ClientRepository;
import magic.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class ClientsManager implements ClientsServiceAPI {
    @Autowired
    private ClientRepository userRepository;
    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    public Optional<Client> registerUser(Client user) {
        if (userRepository.findByPseudo(user.getPseudo()).isPresent()) {
            return Optional.empty();
        }
        user.setMotDePasse(passwordEncoder.encode(user.getMotDePasse()));
        return Optional.of(userRepository.save(user));
    }

    public Optional<String> traiterIdentification(String pseudo, String motDePasse) {
        Optional<Client> userOpt = userRepository.findByPseudo(pseudo);
        
        if (userOpt.isPresent() && passwordEncoder.matches(motDePasse, userOpt.get().getMotDePasse())) {
            String token = jwtUtil.generateToken(pseudo);
            return Optional.of(token);
        }

        return Optional.empty();
    }

    public Optional<Client> rechercherClientParPseudo(String pseudo) {
        Optional<Client> userOpt = userRepository.findByPseudo(pseudo);
        return userOpt;
    }
}
