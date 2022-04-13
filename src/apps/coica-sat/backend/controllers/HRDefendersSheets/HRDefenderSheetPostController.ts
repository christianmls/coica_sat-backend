import { Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from '../Controller';
import {
  HRDefenderSheetCreator
} from '../../../../../Contexts/CoicaSat/HRDefendersSheets/application/HRDefenderSheetCreator';
import {HRDefenderSheetBodyRequest} from './HRDefenderSheetPutController';

export class HRDefenderSheetPostController implements Controller {
  constructor(private hrDefenderSheetCreator: HRDefenderSheetCreator) {}

  async run(req: HRDefenderSheetBodyRequest, res: Response) {
    try {
      const { body  } = req;
      const status = 'Recibida';
      const processing = false;
      await this.hrDefenderSheetCreator.run({
        ...body,
        status,
        processing
      });
      res.status(httpStatus.CREATED).send();
    }  catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: String(error)
      });
    }
  }
}
