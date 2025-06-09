package magic.service;

import magic.model.Product;
import magic.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.Optional;
import java.util.List;
@Service
public class ProductServiceImpl implements IProductService {
    @Autowired
    private ProductRepository productRepository;
    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
    @Override
    public Product getProductByReference(String reference) {
        return productRepository.findByReference(reference)
                .orElseThrow(() -> new RuntimeException("Produit non trouvé avec référence : " + reference));
    }

    @Override
    @Transactional
    public Product saveProduct(Product product) {
        if (product.isEstDuJour()) {
            Optional<Product> ancienProduitDuJour = productRepository.findByEstDuJourTrue();
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
    public Optional<Product> getProductDuJour() {
        return productRepository.findByEstDuJourTrue();
    }
}

