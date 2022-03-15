import Jwt from 'jsonwebtoken';
import { Response, NextFunction } from 'express';
import {UserLoggedRequest} from '../shared/types';

const JWT_SECRET = process.env.JWT_SECRET ?? 'jwt_secret_key_123_dev';

export class AuthorizeService {
  public static async verify(req: UserLoggedRequest, res: Response, next: NextFunction) {
    try {
      const { authorization: token } = req.headers;
      if (!token) {
        throw new Error('No token provided');
      }
      const user: any = Jwt.verify(token, JWT_SECRET);
      req.user = {
        id: user.id,
      };
      next();
    } catch (error) {
      res.status(401).send('Unauthorized');
      return;
    }
  }
}
