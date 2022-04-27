import Jwt from 'jsonwebtoken';
import { Response, NextFunction } from 'express';
import {UserLoggedRequest} from '../shared/types';
import {Roles} from '../../../../Contexts/CoicaSat/Shared/domain/Roles/Roles';

const JWT_SECRET = process.env.JWT_SECRET ?? 'secret_key_123';

export const verifyTokenByRoles = (roles: Array<string> = [Roles.USER]) => (req: UserLoggedRequest, res: Response, next: NextFunction) => {
  try {
    const { authorization: token } = req.headers;
    if (!token) {
      throw new Error('No ha espcificado un token');
    }
    const user: any = Jwt.verify(token, JWT_SECRET);

    if (!user.roles.some((role: string) => roles.includes(role))) {
      throw new Error('No tienes acceso a este recurso');
    }

    req.user = {
      id: user.id,
      role: user.roles,
      country: user.country
    };

    next();
  } catch (error) {
    res.status(401).send('No tienes acceso a este recurso');
    return;
  }
}
