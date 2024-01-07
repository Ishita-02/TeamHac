import { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken');

const SECRET = process.env.REACT_APP_SECRET_KEY;

const authenticateJwt = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(' ')[1];
      jwt.verify(token, SECRET, (err: Error, user: any) => {
        if (err) {
          return res.sendStatus(403);
        }
        (req as any).user = user;
        next();
      });
    } else {
      res.sendStatus(401);
    }
};

export default authenticateJwt;