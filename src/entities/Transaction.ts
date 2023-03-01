import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    user: string

    @Column()
    calculation: string

    @Column()
    result: string

    @Column({ type: "timestamptz", default: () => "CURRENT_TIMESTAMP" })
    date_time_with_timezone: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}