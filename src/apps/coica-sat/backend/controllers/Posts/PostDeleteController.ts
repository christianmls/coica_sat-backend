import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from '../Controller';
import {PostRemover} from '../../../../../Contexts/CoicaSat/Posts/application/PostRemover';

export class PostDeleteController implements Controller {
  constructor(private postRemover: PostRemover) {}

  async run(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await this.postRemover.run(id);
      res.status(httpStatus.NO_CONTENT).send();
    }  catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: String(error)
      });
    }
  }
}
