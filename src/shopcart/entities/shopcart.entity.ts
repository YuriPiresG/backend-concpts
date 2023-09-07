import { Product } from 'src/product/entities/product.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Shopcart_product } from './shopcart_product.entity';

@Entity()
export class Shopcart {
  @OneToMany(
    () => Shopcart_product,
    (shopcart_product) => shopcart_product.shopcart,
  )
  shopcart_products: Shopcart_product[];

  @ManyToOne(() => Product, (product: Product) => product.shopcarts)
  product: Product;

  @PrimaryGeneratedColumn()
  index: number;

  @Column()
  quantidade: number;
}
