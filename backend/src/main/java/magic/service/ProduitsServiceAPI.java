package magic.service;
import magic.model.Produit;

import java.util.List;
import java.util.Optional;

public interface ProduitsServiceAPI {
    List<Produit> getAllProducts();
    Produit getProductByReference(String reference);
    Produit saveProduct(Produit product);
    void deleteProduct(String reference);
    Optional<Produit> rechercherProduitDuJour();
}
