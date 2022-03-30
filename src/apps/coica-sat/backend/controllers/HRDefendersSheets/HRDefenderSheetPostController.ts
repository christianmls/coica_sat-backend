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
    const { body  } = req;
    await this.hrDefenderSheetCreator.run({ ...body  });
    res.status(httpStatus.CREATED).send();
  }
}
