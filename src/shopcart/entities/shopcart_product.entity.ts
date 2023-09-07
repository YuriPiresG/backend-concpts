import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Shopcart } from 'src/shopcart/entities/shopcart.entity';
import { Product } from 'src/product/entities/product.entity';

@Entity()
export class Shopcart_product {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Shopcart, (shopcart) => shopcart.index)
  shopcart: Shopcart;

  @ManyToOne(() => Product, (product) => product.id)
  product: Product;

  @Column()
  quantidade: number;
}
