import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateShopcartDto {
  @IsNotEmpty()
  @IsNumber()
  productId: number;

  @IsNotEmpty()
  @IsNumber()
  quantidade: number;

  @IsNotEmpty()
  @IsNumber()
  preco: number;
}
