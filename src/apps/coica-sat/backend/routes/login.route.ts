import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import {LoginPostController} from '../controllers/UsersLogin/LoginPostController';

import joiValidator from 'express-joi-validation';
import {LoginSchema} from '../schemas/LoginSchema';

const validator = joiValidator.createValidator({});

export const register = (router: Router) => {
  const loginPostController: LoginPostController = container.get('Apps.CoicaSat.controllers.LoginPostController');
  router.post('/token',  validator.body(LoginSchema), (req: Request, res: Response) => loginPostController.run(req, res));
};
