package Ecommerce.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class ProductsDto {
    private Long id;
    private String productName;
    private String description;
    private float price;
    private String url;
}
