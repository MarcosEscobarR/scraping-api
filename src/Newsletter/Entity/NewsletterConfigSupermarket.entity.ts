import {NewsletterConfig} from "./NewsletterConfig.entity";
import {Supermarket} from "../../supermarket/entities/supermarkets.entity";
import {Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class NewsletterConfigSupermarket {
    @PrimaryGeneratedColumn()
    id: number
    
    @ManyToOne(() => NewsletterConfig, p => p.newsletterConfigSupermarket)
    newsletterConfig: NewsletterConfig
    @ManyToOne(() => NewsletterConfig, p => p.newsletterConfigSupermarket)
    supermarket: Supermarket;
}