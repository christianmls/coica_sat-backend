import { Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from '../Controller';
import {PostCreator} from '../../../../../Contexts/CoicaSat/Posts/application/PostCreator';
import {PostPostRequest} from './PostPostController';

export class PostPutController implements Controller {
  constructor(private postCreator: PostCreator) {}

  async run(req: PostPostRequest, res: Response) {
    try {
      const { body  } = req;
      await this.postCreator.run({ ...body  });
      res.status(httpStatus.OK).send();
    }  catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: String(error)
      });
    }
  }
}
