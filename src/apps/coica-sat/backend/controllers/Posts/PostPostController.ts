import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from '../Controller';
import {PostCreator} from '../../../../../Contexts/CoicaSat/Posts/application/PostCreator';
import {UserLoggedRequest} from '../../shared/types';

export type PostPostRequest = UserLoggedRequest & Request & {
  body: {
    id: string;
    description: string;
    images: string;
  };
};
export class PostPostController implements Controller {
  constructor(private postCreator: PostCreator) {}

  async run(req: PostPostRequest, res: Response) {
      try {
        const { id, description, images } = req.body;
        const status = 'EN REVISIÓN';
        await this.postCreator.run({ id, description, images, userCreatorId: req.user.id, status });
        res.status(httpStatus.CREATED).send();
      }  catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
          error: String(error)
        });
      }
  }
}
