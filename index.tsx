require('dotenv').config();

import express, { Application, Request, Response } from 'express';
import 'reflect-metadata';
import { AppDataSource } from './src/database';
import appRoute from './src/routes/app.route';


const app: Application = express();
const PORT = 3000;

AppDataSource.initialize()
    .then(() => {
        console.log('DB Connection Successful!');
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

app.use('/app', appRoute);

try {
    app.listen(PORT, (): void => {
        console.log(`Connected successfully on port ${PORT}`);
    });
} catch (error) {
    console.error(`Error occured: ${error.message}`);
}
