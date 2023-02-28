import {Router} from 'express';
import { addTransaction, addUser, deleteTransactions, getTransactions } from '../controllers/app.controller';
import { authMiddleware } from '../middlewares/app.middleware';

const appRoute = Router();

appRoute.use(authMiddleware);

appRoute.post('/user', addUser);
appRoute.get('/user/:uuid/transaction', getTransactions);
appRoute.post('/user/:uuid/transaction', addTransaction);
appRoute.delete('/user/:uuid/transaction', deleteTransactions);

export default appRoute;