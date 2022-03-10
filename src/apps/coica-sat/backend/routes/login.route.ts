import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import {LoginPostController} from "../controllers/UsersLogin/LoginPostController";

export const register = (router: Router) => {
  const loginPostController: LoginPostController = container.get('Apps.CoicaSat.controllers.LoginPostController');
  router.post('/token', (req: Request, res: Response) => loginPostController.run(req, res));
};
