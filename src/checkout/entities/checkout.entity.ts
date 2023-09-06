import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Checkout {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productId: number;

  @Column()
  quantidade: number;

  @Column({ type: 'double' })
  precoFinal: number;

  @Column({ type: 'date' })
  diaDaCompra: string;

  @Column({ type: 'timestamptz' })
  horaDaCompra: Date;
}
