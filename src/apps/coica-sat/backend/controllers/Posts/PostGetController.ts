import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from '../Controller';
import {PostFinder} from '../../../../../Contexts/CoicaSat/Posts/application/PostFinder';


export class PostGetController implements Controller {
  constructor(private postFinder: PostFinder) {}

  async run(req: Request, res: Response) {
      try {
        const posts = await this.postFinder.run();
        res.status(httpStatus.OK).send(posts);
      }  catch (error) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
          error: String(error)
        });
      }
  }
}
