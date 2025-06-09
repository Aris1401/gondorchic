package magic.repository;


import magic.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, String> {
    Optional<Product> findByReference(String reference);
    void deleteByReference(String reference);

    Optional<Product> findByEstDuJourTrue();
}
