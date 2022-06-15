import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  link: string;
  @Column()
  Price: number;
  @Column()
  imageUrl: string;
  @Column()
  brand: string;
  @Column()
  unitOfMeasure: string;
}
