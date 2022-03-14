import { Router, Response } from 'express';
import container from '../dependency-injection';
import {TokenVerificationGetController} from '../controllers/TokensVerification/TokenVerificationGetController';
import { AuthorizeService  } from './../services/AuthorizeService';
import {TokenVerifyGetRequest} from '../shared/types';

export const register = (router: Router) => {
  const tokenVerificationGetController: TokenVerificationGetController = container.get('Apps.CoicaSat.controllers.TokenVerificationGetController');
  // @ts-ignore
  router.get('/token-me',  AuthorizeService.verify, (req: TokenVerifyGetRequest, res: Response) => tokenVerificationGetController.run(req, res));
};
