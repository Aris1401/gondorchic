package magic.controller;

import magic.model.Produit;
import magic.service.ProduitsServiceAPI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/produits")
public class ProduitController {

    @Autowired
    private ProduitsServiceAPI productService;

    @GetMapping("/")
    public String home() {
        return "Bienvenue sur l'API Magic Vente Stock 👋";
    }
    @GetMapping
    public List<Produit> getAllProducts() {
        return productService.getAllProducts();
    }

    @GetMapping("/{reference}")
    public Produit getProductByReference(@PathVariable String reference) {
        return productService.getProductByReference(reference);
    }
    @PutMapping("/{reference}")
    public ResponseEntity<Produit> updateProduct(@PathVariable String reference, @RequestBody Produit updatedProduct) {
        try {
            Produit existingProduct = productService.getProductByReference(reference);
            existingProduct.setReference(updatedProduct.getReference());
            existingProduct.setLibelle(updatedProduct.getLibelle());
            existingProduct.setPrix(updatedProduct.getPrix());
            existingProduct.setEstDuJour(updatedProduct.isEstDuJour());
            existingProduct.setQuantiteEnStock(updatedProduct.getQuantiteEnStock());
            Produit savedProduct = productService.saveProduct(existingProduct);
            return ResponseEntity.ok(savedProduct);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }


    @PostMapping
    public Produit addProduct(@RequestBody Produit product) {
        return productService.saveProduct(product);
    }

    @DeleteMapping("/{reference}")
    public void deleteProduct(@PathVariable String reference) {
        productService.deleteProduct(reference);
    }

    @GetMapping("/jour")
    public ResponseEntity<Produit> rechercherProduitDuJour() {
        return ResponseEntity.ok(productService.rechercherProduitDuJour().get());
    }
}
