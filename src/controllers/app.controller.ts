import { Request, Response } from 'express';
import { AppDataSource } from '../database';
import { Transaction } from '../entities/Transaction';
import { User } from '../entities/User';

export const addUser = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { os } = req.body;

    const user = new User();
    user.os = os;

    await AppDataSource.manager.save(user);

    return res.status(200).send({
        user: {
            uuid: user.uuid,
        },
    });
};

export const getTransactions = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { uuid } = req.params;
    const savedTransactions = await AppDataSource.manager.findBy(Transaction, {
        user: uuid,
    });

    return res.status(200).send({
        transactions: savedTransactions,
    });
};

export const addTransaction = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { uuid } = req.params;
    const { calculation, result } = req.body;

    const newTransaction = new Transactions();
    newTransaction.user = uuid;
    newTransaction.calculation = calculation;
    newTransaction.result = result;

    await AppDataSource.manager.save(newTransaction);

    return res.status(200).send('OK');
};

export const deleteTransactions = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { uuid } = req.params;

    await AppDataSource.manager.delete(Transactions, {
        user: uuid,
    });

    return res.status(204).send('Resource Deleted');
};
