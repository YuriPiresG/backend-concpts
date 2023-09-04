import { Shopcart } from 'src/shopcart/entities/shopcart.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Product {
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

  @Column()
  image: string;

  @OneToMany(() => Shopcart, (shopcart: Shopcart) => shopcart.product)
  shopcarts: Shopcart[];
}
