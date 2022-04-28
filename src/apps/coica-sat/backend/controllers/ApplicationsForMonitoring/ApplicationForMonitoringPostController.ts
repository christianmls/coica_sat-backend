import { Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from '../Controller';
import {
  ApplicationForMonitoringCreator
} from '../../../../../Contexts/CoicaSat/ApplicationsForMonitoring/application/ApplicationForMonitoringCreator';
import {ApplicationForMonitoringBodyRequest} from './ApplicationForMonitoringPutController';
import {getUserFromRequest} from '../../services/Utility';
import {applicationForMonitoringStatusList} from '../../enums/ApplicationForMonitoringStatusList';

export class ApplicationForMonitoringPostController implements Controller {
  constructor(private applicationForMonitoringCreator: ApplicationForMonitoringCreator) {}

  async run(req: ApplicationForMonitoringBodyRequest, res: Response) {
    try {
      const { body  } = req;
      const date = new Date();
      const status = applicationForMonitoringStatusList.REQUESTED;
      const { id: userId} = getUserFromRequest(req);
      const details = 'Solicitud para monitor enviada';
      await this.applicationForMonitoringCreator.run({
        ...body,
        status,
        details,
        userId,
        date
      });
      res.status(httpStatus.CREATED).send();
    }  catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: String(error)
      });
    }
  }
}
