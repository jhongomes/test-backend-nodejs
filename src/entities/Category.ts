

import { Unique } from "typeorm";
import {    Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, UpdateDateColumn} from "typeorm";



@Entity("categories")
class Category {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
    unique: true,
    })
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

   
}
export { Category}