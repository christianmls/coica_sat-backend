import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import {LoginPostController} from '../controllers/UsersLogin/LoginPostController';
import {LoginSchema} from '../schemas/LoginSchema';
import {validateBody} from '../schemas/JoiModule';


export const register = (router: Router) => {
  const loginPostController: LoginPostController = container.get('Apps.CoicaSat.controllers.LoginPostController');
  router.post('/token',  validateBody(LoginSchema), (req: Request, res: Response) => loginPostController.run(req, res));
};
