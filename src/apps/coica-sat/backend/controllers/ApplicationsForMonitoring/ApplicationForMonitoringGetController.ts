import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from '../Controller';
import {getPaginationFromQuery} from '../../services/Utility';
import {
  ApplicationForMonitoringFinder
} from '../../../../../Contexts/CoicaSat/ApplicationsForMonitoring/application/ApplicationForMonitoringFinder';

export class ApplicationForMonitoringGetController implements Controller {
  constructor(private applicationForMonitoringFinder: ApplicationForMonitoringFinder) {}

  async run(req: Request, res: Response) {
    try {
      const { pageNumber, nPerPage } = getPaginationFromQuery(req);
      const paginateItemsResponse = await this.applicationForMonitoringFinder.run({},{ pageNumber, nPerPage });
      res.status(httpStatus.OK).send(paginateItemsResponse);
    }  catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: String(error)
      });
    }
  }
}
