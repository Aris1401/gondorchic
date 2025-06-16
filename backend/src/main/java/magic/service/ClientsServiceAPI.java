package magic.service;

import java.util.Optional;

import magic.model.Client;

public interface ClientsServiceAPI {
    public Optional<Client> rechercherClientParPseudo(String pseudo);
}
