import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from '../Controller';
import {
  HRDefenderSheetFinder
} from '../../../../../Contexts/CoicaSat/HRDefendersSheets/application/HRDefenderSheetFinder';


export class HRDefenderSheetGetController implements Controller {
  constructor(private postFinder: HRDefenderSheetFinder) {}

  async run(req: Request, res: Response) {
    const hrDefendersSheets = await this.postFinder.run();
    res.status(httpStatus.OK).send(hrDefendersSheets);
  }
}
