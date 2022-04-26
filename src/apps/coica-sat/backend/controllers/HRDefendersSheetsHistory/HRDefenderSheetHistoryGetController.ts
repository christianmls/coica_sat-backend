import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from '../Controller';
import {getPaginationFromQuery} from '../../services/Utility';
import {
  HRDefenderSheetHistoryFinder
} from '../../../../../Contexts/CoicaSat/HRDefendersSheetsHistory/application/HRDefenderSheetHistoryFinder';

export class HRDefenderSheetHistoryGetController implements Controller {
  constructor(private hrDefenderSheetHistoryFinder: HRDefenderSheetHistoryFinder) {}

  async run(req: Request, res: Response) {
    try {
      const { pageNumber, nPerPage } = getPaginationFromQuery(req);
      const query = {}
      const hrDefendersSheets = await this.hrDefenderSheetHistoryFinder.run(query,{ pageNumber, nPerPage });
      res.status(httpStatus.OK).send(hrDefendersSheets);
    }  catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: String(error)
      });
    }
  }
}
