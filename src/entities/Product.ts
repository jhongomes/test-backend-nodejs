import { ManyToOne } from "typeorm";
import { JoinColumn } from "typeorm";


import {    Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, UpdateDateColumn} from "typeorm";
import { Category } from "./Category";



@Entity("products")
class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    titulo: string;

    @Column()
    descricao: string;
    
    @Column()
    preco: number;

    @Column()
    category_id: string

    @JoinColumn({name: "category_id"})
    @ManyToOne(() => Category)
    categoryId: Category

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

   
}
export { Product}