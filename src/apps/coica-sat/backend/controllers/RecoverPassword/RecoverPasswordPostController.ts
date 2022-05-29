import {Controller} from '../Controller';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import {
  RecoverPasswordCreator
} from '../../../../../Contexts/CoicaSat/RecoverPassword/application/RecoverPasswordCreator';

export type RecoverPasswordPostRequest = Request & {
  body: {
    id: string;
    email: string;
  };
};

export class RecoverPasswordPostController implements Controller {
  constructor(
    private recoverPasswordCreator: RecoverPasswordCreator
  ) {}
  async run(req: RecoverPasswordPostRequest, res: Response) {
    try {
      const { id, email } = req.body;
      const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      const createdAt = new Date();
      await this.recoverPasswordCreator.run({ id, email, token, createdAt });
      res.status(httpStatus.CREATED).send();
    }  catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: String(error)
      });
    }
  }
}
