import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from '../Controller';
import {UserLoggedRequest} from '../../shared/types';
import {
  ApplicationForMonitoringCreator
} from '../../../../../Contexts/CoicaSat/ApplicationsForMonitoring/application/ApplicationForMonitoringCreator';


export type ApplicationForMonitoringBodyRequest = UserLoggedRequest & Request & {
  body: {
    id: string;
    status: string;
    details: string;
    date: Date;
    userId: string;
  }
};

export class ApplicationForMonitoringPutController implements Controller {
  constructor(private applicationForMonitoringCreator: ApplicationForMonitoringCreator) {}

  async run(req: ApplicationForMonitoringBodyRequest, res: Response) {
    try {
      const { body  } = req;
      await this.applicationForMonitoringCreator.run({ ...body  });
      res.status(httpStatus.OK).send();
    }  catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: String(error)
      });
    }
  }
}
