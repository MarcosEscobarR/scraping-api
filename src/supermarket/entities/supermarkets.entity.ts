import {
  Column,
  Entity, JoinColumn,
  JoinTable,
  ManyToMany, ManyToOne, OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {Category} from "../../categories/entities/category.entity";
import {NewsletterConfig} from "../../Newsletter/Entity/NewsletterConfig.entity";
import {NewsletterConfigSupermarket} from "../../Newsletter/Entity/NewsletterConfigSupermarket.entity";

@Entity()
export class Supermarket {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, nullable: true })
  name: string;

  @Column({ nullable: true })
  image: string;

  @Column({ length: 20 })
  phone: string;

  @Column({ length: 50 })
  pageUrl: string;

  @ManyToMany(() => Category)
  @JoinTable()
  categories: Category[];

  @ManyToMany(() => NewsletterConfig, c => c.supermarkets)
  config: NewsletterConfig[]
  
  @OneToMany(() => NewsletterConfigSupermarket, c => c.supermarket)
  newsletterConfigSupermarket: NewsletterConfigSupermarket[];

}
