import { Product } from 'src/product/entities/product.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Shopcart {
  @ManyToOne(() => Product, (product: Product) => product.shopcarts)
  product: Product;

  @PrimaryGeneratedColumn()
  index: number;

  @Column()
  quantidade: number;

  @Column()
  preco: number;
}
