import { PartialType } from '@nestjs/mapped-types';
import { CreateShopcartDto } from './create-shopcart.dto';
import { IsNotEmpty, IsObject, IsNumber } from 'class-validator';
import { Product } from 'src/product/entities/product.entity';

export class UpdateShopcartDto extends PartialType(CreateShopcartDto) {
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
