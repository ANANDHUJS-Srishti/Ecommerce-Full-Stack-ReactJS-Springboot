package Ecommerce.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Ecommerce.Model.Products;
@Repository
public interface ProductRepository extends JpaRepository<Products, Long> {
    
}
