import { IsNotEmpty, IsNumber, IsObject } from 'class-validator';
import { Product } from 'src/product/entities/product.entity';

export class CreateShopcartDto {
  @IsNotEmpty()
  @IsObject()
  product: Product;

  @IsNotEmpty()
  @IsNumber()
  quantidade: number;

  @IsNotEmpty()
  @IsNumber()
  preco: number;
}
