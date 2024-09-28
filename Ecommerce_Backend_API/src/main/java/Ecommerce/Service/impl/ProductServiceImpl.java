package Ecommerce.Service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import Ecommerce.Dto.ProductsDto;
import Ecommerce.Exception.ResourceNotFoundException;
import Ecommerce.Mapper.ProductsMapper;
import Ecommerce.Model.Products;
import Ecommerce.Repository.ProductRepository;
import Ecommerce.Service.ProductService;
import lombok.AllArgsConstructor;


@Service
@AllArgsConstructor
public class ProductServiceImpl implements ProductService{

  private ProductRepository productRepository;

@Override
public ProductsDto createProduct(ProductsDto productsDto) {
    Products products = ProductsMapper.mapToProducts(productsDto);
    Products savedProducts = productRepository.save(products);
    return ProductsMapper.mapToProductsDto(savedProducts);
}

@Override
public ProductsDto getProductsById(Long ProductId) {
    Products products = productRepository.findById(ProductId)
               .orElseThrow(()->
               new ResourceNotFoundException("Product does not exist with ID" + ProductId));
    return ProductsMapper.mapToProductsDto(products);
}

@Override
public List<ProductsDto> getAllProducts() {
   List<Products> products = productRepository.findAll();
   return products.stream().map((product) -> ProductsMapper.mapToProductsDto(product))
   .collect(Collectors.toList());
}

@Override
public ProductsDto updateProducts(Long productId, ProductsDto updatedProducts) {
    Products product = productRepository.findById(productId)
    .orElseThrow(()-> new ResourceNotFoundException("Product Does not Exist" + productId));

    product.setProductName(updatedProducts.getProductName());
    product.setDescription(updatedProducts.getDescription());
    product.setPrice(updatedProducts.getPrice());
    product.setUrl(updatedProducts.getUrl());

    Products updatedProductObj = productRepository.save(product);
    return ProductsMapper.mapToProductsDto(updatedProductObj);
}

@Override
public void deleteProducts(Long productId) {
   productRepository.deleteById(productId);
}
}
