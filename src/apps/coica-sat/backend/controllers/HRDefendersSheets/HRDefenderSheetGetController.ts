import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from '../Controller';
import {
  HRDefenderSheetFinder
} from '../../../../../Contexts/CoicaSat/HRDefendersSheets/application/HRDefenderSheetFinder';
import {getPaginationFromQuery} from '../../services/Utility';


export class HRDefenderSheetGetController implements Controller {
  constructor(private postFinder: HRDefenderSheetFinder) {}

  async run(req: Request, res: Response) {
    try {
      const { pageNumber, nPerPage } = getPaginationFromQuery(req);
      const hrDefendersSheets = await this.postFinder.run({ pageNumber, nPerPage });;
      res.status(httpStatus.OK).send(hrDefendersSheets);
    }  catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: String(error)
      });
    }
  }
}
