import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import {UserPostController} from '../controllers/Users/UserPostController';
import {UserGetController} from '../controllers/Users/UserGetController';
import joiValidator from 'express-joi-validation';
import {UserSchema} from '../schemas/UserSchema';

const validator = joiValidator.createValidator({});

export const register = (router: Router) => {
  const userPostController: UserPostController = container.get('Apps.CoicaSat.controllers.UserPostController');
  router.post('/user',  validator.query(UserSchema),  (req: Request, res: Response) => userPostController.run(req, res));

  const userGetController: UserGetController = container.get('Apps.CoicaSat.controllers.UserGetController');
  router.get('/users',   (req: Request, res: Response) => userGetController.run(req, res));
};
