import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from '../Controller';
import {
  HRDefenderSheetFinder
} from '../../../../../Contexts/CoicaSat/HRDefendersSheets/application/HRDefenderSheetFinder';
import {getPaginationFromQuery, getUserFromRequest} from '../../services/Utility';
import {Roles} from '../../../../../Contexts/CoicaSat/Shared/domain/Roles/Roles';

export class HRDefenderSheetGetController implements Controller {
  constructor(private postFinder: HRDefenderSheetFinder) {}

  async run(req: Request, res: Response) {
    try {
      const { pageNumber, nPerPage } = getPaginationFromQuery(req);
      const { role, country, id: userCreatorId } =  getUserFromRequest(req);

      const query = role.includes(Roles.ADMIN)  ? {}  : role.includes(Roles.FOCAL_POINT) ? {
        country
      } : { userCreatorId };

      const hrDefendersSheets = await this.postFinder.run(query,{ pageNumber, nPerPage });
      res.status(httpStatus.OK).send(hrDefendersSheets);
    }  catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: String(error)
      });
    }
  }
}
