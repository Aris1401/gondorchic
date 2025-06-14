package magic.service;

import magic.model.Produit;
import magic.repository.ProduitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.Optional;
import java.util.List;
@Service
public class ProduitsManager implements ProduitsServiceAPI {
    @Autowired
    private ProduitRepository productRepository;
    @Override
    public List<Produit> getAllProducts() {
        return productRepository.findAll();
    }
    @Override
    public Produit getProductByReference(String reference) {
        return productRepository.findByReference(reference)
                .orElseThrow(() -> new RuntimeException("Produit non trouvé avec référence : " + reference));
    }

    @Override
    @Transactional
    public Produit saveProduct(Produit product) {
        if (product.isEstDuJour()) {
            Optional<Produit> ancienProduitDuJour = productRepository.findByEstDuJourTrue();
            ancienProduitDuJour.ifPresent(p -> {
                p.setEstDuJour(false);
                productRepository.save(p);
            });
        }
        return productRepository.save(product);
    }

    @Override
    public void deleteProduct(String reference) {
        productRepository.deleteByReference(reference);
    }

    @Override
    public Optional<Produit> rechercherProduitDuJour() {
        return productRepository.findByEstDuJourTrue();
    }
}

