import {
    Entity,
    Column,
    Generated,
    PrimaryColumn,
    CreateDateColumn,
    DeleteDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
    @PrimaryColumn()
    @Generated('uuid')
    uuid: string;

    @Column()
    os: string;

    @Column({ type: 'timestamptz' })
    date_time_with_timezone: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}
