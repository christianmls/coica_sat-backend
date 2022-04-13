import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from '../Controller';
import {HRDefenderSheetRemover} from '../../../../../Contexts/CoicaSat/HRDefendersSheets/application/HRDefenderSheetRemover';

export class HRDefenderSheetDeleteController implements Controller {
  constructor(private departmentRemover: HRDefenderSheetRemover) {}

  async run(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await this.departmentRemover.run(id);
      res.status(httpStatus.NO_CONTENT).send();
    }  catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: String(error)
      });
    }
  }
}
