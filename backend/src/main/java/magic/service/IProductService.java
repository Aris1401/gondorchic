package magic.service;
import magic.model.Product;

import java.util.List;
import java.util.Optional;

public interface IProductService {
    List<Product> getAllProducts();
    Product getProductByReference(String reference);
    Product saveProduct(Product product);
    void deleteProduct(String reference);
    Optional<Product> getProductDuJour();
}
