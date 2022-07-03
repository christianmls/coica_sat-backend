import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from '../Controller';
import {getPaginationFromQuery, getUserFromRequest} from '../../services/Utility';
import {
  ApplicationForMonitoringFinder
} from '../../../../../Contexts/CoicaSat/ApplicationsForMonitoring/application/ApplicationForMonitoringFinder';
import {Roles} from '../../../../../Contexts/CoicaSat/Shared/domain/Roles/Roles';

export class ApplicationForMonitoringGetController implements Controller {
  constructor(private applicationForMonitoringFinder: ApplicationForMonitoringFinder) {}

  async run(req: Request, res: Response) {
    try {
      const { pageNumber, nPerPage } = getPaginationFromQuery(req);
      const { status } = req.query as { status: string };
      const { role, country, id: userCreatorId } =  getUserFromRequest(req);

      const query = role.includes(Roles.ADMIN)  ? { status }  : role.includes(Roles.FOCAL_POINT) ? {
        country,
        status
      } : { userId: userCreatorId, status };

      const paginateItemsResponse = await this.applicationForMonitoringFinder.run(query,{ pageNumber, nPerPage });
      res.status(httpStatus.OK).send(paginateItemsResponse);
    }  catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: String(error)
      });
    }
  }
}
