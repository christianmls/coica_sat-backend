import { Response } from 'express';
import {Controller} from '../Controller';
import httpStatus from 'http-status';
import {TokenVerifyGetRequest} from '../../shared/types';

export class TokenVerificationGetController implements  Controller {

  async run(req: TokenVerifyGetRequest, res: Response) {
     res.status(httpStatus.OK).json({
      message: `Token verification successful for user ${req.user.id}`
    });
  }
}
