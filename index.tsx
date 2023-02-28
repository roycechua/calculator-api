require('dotenv').config();

import express, { Application, Request, Response } from 'express';
import 'reflect-metadata';
import { AppDataSource } from './src/database';

const app: Application = express();
const PORT = 3000;

AppDataSource.initialize()
    .then(() => {
        console.log("DB Connection Successful!")
    })
    .catch((error) => console.log(error));

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).send({
        message: 'Hello World!',
    });
});

try {
    app.listen(PORT, (): void => {
        console.log(`Connected successfully on port ${PORT}`);
    });
} catch (error) {
    console.error(`Error occured: ${error.message}`);
}
