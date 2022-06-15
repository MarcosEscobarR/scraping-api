import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {NewsletterConfig} from "./NewsletterConfig.entity";

@Entity()
export class Newsletter {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({length: 50})
    userEmail: string;
    
    @Column({type: 'boolean'})
    active: boolean;
    
    @OneToOne(() => NewsletterConfig)
    @JoinColumn()
    config: NewsletterConfig
}