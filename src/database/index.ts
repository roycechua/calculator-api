import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../entities/User';
import { Transactions } from '../entities/Transactions';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [User, Transactions],
    synchronize: true,
    logging: false,
});
