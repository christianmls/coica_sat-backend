import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import {UserProfilePutController} from '../controllers/UsersProfile/UserProfilePutController';

export const register = (router: Router) => {
  const userProfilePutController: UserProfilePutController = container.get('Apps.CoicaSat.controllers.UserProfilePutController');
  router.put('/user-profile/:id', (req: Request, res: Response) => userProfilePutController.run(req, res));
};
