export const authMiddleware = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).send({ error: 'Unauthorized'});
    }

    const token = authorization.replace('Bearer ', '');
    if(token === process.env.TOKEN) {
        next();
    } else {
        return res.status(401).send({ error: 'Unauthorized'});
    }
}