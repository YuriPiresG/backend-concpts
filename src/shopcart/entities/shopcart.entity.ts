import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Shopcart_product } from './shopcart_product.entity';

@Entity()
export class Shopcart {
  @OneToMany(
    () => Shopcart_product,
    (shopcart_product) => shopcart_product.shopcart,
  )
  shopcart_products: Shopcart_product[];

  @PrimaryGeneratedColumn()
  index: number;
}
