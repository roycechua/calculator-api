import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Transactions {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    user: string

    @Column()
    preview: string

    @Column()
    result: number

    @Column({ type: 'timestamptz' })
    date_time_with_timezone: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}