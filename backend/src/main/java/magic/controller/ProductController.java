package magic.controller;

import magic.model.Product;
import magic.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private IProductService productService;

    @GetMapping("/")
    public String home() {
        return "Bienvenue sur l'API Magic Vente Stock 👋";
    }
    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/{reference}")
    public Product getProductByReference(@PathVariable String reference) {
        return productService.getProductByReference(reference);
    }
    @PutMapping("/{reference}")
    public ResponseEntity<Product> updateProduct(@PathVariable String reference, @RequestBody Product updatedProduct) {
        try {
            Product existingProduct = productService.getProductByReference(reference);
            existingProduct.setReference(updatedProduct.getReference());
            existingProduct.setLibelle(updatedProduct.getLibelle());
            existingProduct.setPrix(updatedProduct.getPrix());
            existingProduct.setEstDuJour(updatedProduct.isEstDuJour());
            existingProduct.setQuantiteEnStock(updatedProduct.getQuantiteEnStock());
            Product savedProduct = productService.saveProduct(existingProduct);
            return ResponseEntity.ok(savedProduct);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }


    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        return productService.saveProduct(product);
    }

    @DeleteMapping("/{reference}")
    public void deleteProduct(@PathVariable String reference) {
        productService.deleteProduct(reference);
    }
}
