import {Controller} from '../Controller';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import {
  ChangePasswordCreator
} from '../../../../../Contexts/CoicaSat/RecoverPassword/application/ChangePasswordCreator';

export type ChangePasswordPostRequest = Request & {
  body: {
    token: string;
    newPassword: string;
  };
};

export class ChangePasswordPostController implements Controller {
  constructor(
    private changePasswordCreator: ChangePasswordCreator
  ) {}
  async run(req: ChangePasswordPostRequest, res: Response) {
    try {
      const { newPassword, token } = req.body;
      await this.changePasswordCreator.run({ token, newPassword });
      res.status(httpStatus.CREATED).send();
    }  catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: String(error)
      });
    }
  }
}
