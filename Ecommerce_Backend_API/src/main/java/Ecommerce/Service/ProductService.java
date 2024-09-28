package Ecommerce.Service;

import java.util.List;

import Ecommerce.Dto.ProductsDto;

public interface ProductService {
    
    ProductsDto createProduct(ProductsDto productsDto);
    ProductsDto getProductsById(Long ProductId);
    List<ProductsDto> getAllProducts();
    ProductsDto updateProducts(Long productId , ProductsDto updatedProducts);
    void deleteProducts(Long productId);
}
