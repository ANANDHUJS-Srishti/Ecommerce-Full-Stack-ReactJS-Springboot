package Ecommerce.Mapper;

import Ecommerce.Dto.ProductsDto;
import Ecommerce.Model.Products;

public class ProductsMapper {
    public static ProductsDto mapToProductsDto(Products products){
        return new ProductsDto(
          products.getId(),
          products.getProductName(),
          products.getDescription(),
          products.getPrice(),
          products.getUrl()
        );
    }

    public static Products mapToProducts(ProductsDto productsDto){
        return new Products(
            productsDto.getId(),
            productsDto.getProductName(),
            productsDto.getDescription(),
            productsDto.getPrice(),
            productsDto.getUrl()
        );
    }
}
