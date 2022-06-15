import {Column, Entity, JoinColumn, ManyToMany, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Supermarket} from "../../supermarket/entities/supermarkets.entity";

@Entity()
export class NewsletterConfig {
    @PrimaryGeneratedColumn()
    id:  number;
    
    @Column({length: 10})
    periodicy: string = "daily" || 'weekly' || "monday" || "tuesday" || "wednesday" || "thursday"  || "friday" || "saturday" || "sunday"
    
    @ManyToMany(() => Supermarket, c => c.config)
    @JoinColumn()
    supermarkets: Supermarket[]
}