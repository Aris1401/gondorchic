package magic.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;

@Entity
@Table(name = "Client")
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String pseudo;
    private String motDePasse;
    private String nom;
    private String prenom;

    public Client() {}
    
    public Long getId() {
        return id;
    }
    
    public String getPseudo() {
        return pseudo;
    }
    
    public void setPseudo(String username) {
        this.pseudo = username;
    }
    
    public String getMotDePasse() {
        return motDePasse;
    }

    public void setMotDePasse(String password) {
        this.motDePasse = password;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }
}
