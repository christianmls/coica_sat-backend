import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import {UserPostController} from '../controllers/Users/UserPostController';
import {UserGetController} from '../controllers/Users/UserGetController';

export const register = (router: Router) => {
  const userPostController: UserPostController = container.get('Apps.CoicaSat.controllers.UserPostController');
  router.post('/user', (req: Request, res: Response) => userPostController.run(req, res));

  const userGetController: UserGetController = container.get('Apps.CoicaSat.controllers.UserGetController');
  router.get('/users', (req: Request, res: Response) => userGetController.run(req, res));
};
