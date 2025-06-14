package magic.repository;


import magic.model.Produit;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProduitRepository extends JpaRepository<Produit, Long> {
    Optional<Produit> findByReference(String reference);
    void deleteByReference(String reference);

    Optional<Produit> findByEstDuJourTrue();
}
