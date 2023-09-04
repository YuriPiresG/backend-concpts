import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
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
}
