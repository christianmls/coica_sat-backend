import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import {UserPostController} from '../controllers/Users/UserPostController';

export const register = (router: Router) => {
  const userPostController: UserPostController = container.get('Apps.CoicaSat.controllers.UserPostController');
  router.post('/user', (req: Request, res: Response) => userPostController.run(req, res));
};
