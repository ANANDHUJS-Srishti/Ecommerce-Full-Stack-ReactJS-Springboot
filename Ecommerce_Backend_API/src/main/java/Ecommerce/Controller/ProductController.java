package Ecommerce.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Ecommerce.Dto.ProductsDto;
import Ecommerce.Service.ProductService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/products")
public class ProductController {
    
    @Autowired
    private ProductService productService;
    //CREATE
    @PostMapping
    public ResponseEntity<ProductsDto> createProduct(@RequestBody ProductsDto productsDto){
    ProductsDto savedProducts = productService.createProduct(productsDto);
    return new ResponseEntity<>(savedProducts, HttpStatus.CREATED);
    }
    //GetById
    @GetMapping("{id}")
     public ResponseEntity<ProductsDto> getProductsById(@PathVariable("id") Long ProductId){
        ProductsDto productsDto = productService.getProductsById(ProductId);
        return ResponseEntity.ok(productsDto);
    }
    @GetMapping
    public ResponseEntity<List<ProductsDto>> getAllProducts(){
        List<ProductsDto> products = productService.getAllProducts();   
        return ResponseEntity.ok(products);
    }

    @PutMapping("{id}")
    public ResponseEntity<ProductsDto> updateProduct(@PathVariable("id") Long ProductId, @RequestBody ProductsDto updatedProduct){
     ProductsDto productsDto = productService.updateProducts(ProductId, updatedProduct);
     return ResponseEntity.ok(productsDto);
    }
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable("id") Long ProductId){
        productService.deleteProducts(ProductId);
        return ResponseEntity.ok("Employee Deleted Successfully");
    }
}

