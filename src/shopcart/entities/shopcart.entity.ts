import { IsNumber } from 'class-validator';
import { Product } from 'src/product/entities/product.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Shopcart {
  @ManyToOne(() => Product, { eager: true })
  product: Product;

  @PrimaryGeneratedColumn()
  index: number;

  @Column()
  @IsNumber()
  quantidade: number;

  @Column()
  @IsNumber()
  preco: number;
}
