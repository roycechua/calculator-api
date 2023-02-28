import { Request, Response } from 'express';

export const addUser = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { os } = req.body;

    console.log(os);

    return res.status(200).send({
        user: {
            uuid: '',
        },
    });
};

export const getTransactions = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { uuid } = req.params;
    console.log(uuid);

    return res.status(200).send({
        transactions: [],
    });
};

export const addTransaction = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { uuid } = req.params;
    const { calculation, result } = req.body;

    console.log(uuid);
    console.log(calculation);
    console.log(result);

    return res.status(200).send('OK');
};

export const deleteTransactions = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const { uuid } = req.params;

    console.log(uuid);

    return res.status(204).send('Resource Deleted');
};