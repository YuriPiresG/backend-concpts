import { Shopcart } from 'src/shopcart/entities/shopcart.entity';
import { Shopcart_product } from 'src/shopcart/entities/shopcart_product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Product {
  @OneToMany(
    () => Shopcart_product,
    (shopcart_product) => shopcart_product.product,
  )
  shopcart_products: Shopcart_product[];

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;

  @Column()
  unidade: string;

  @Column()
  volume: number;

  @Column()
  marca: string;

  @Column()
  peso: string;

  @Column({ type: 'double' })
  preco: number;

  @Column()
  image: string;

  @OneToMany(() => Shopcart, (shopcart: Shopcart) => shopcart.product)
  shopcarts: Shopcart[];
}
