import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const SECRET = "nfebwyfeueuecnenfuienubv";

const authenticateJwt = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(' ')[1];
      jwt.verify(token, SECRET, (err, user) => {
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