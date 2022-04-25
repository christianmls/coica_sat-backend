import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from '../Controller';
import {
  ApplicationForMonitoringRemover
} from '../../../../../Contexts/CoicaSat/ApplicationsForMonitoring/application/ApplicationForMonitoringRemover';


export class ApplicationForMonitoringDeleteController implements Controller {
  constructor(private applicationForMonitoringRemover: ApplicationForMonitoringRemover) {}

  async run(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await this.applicationForMonitoringRemover.run(id);
      res.status(httpStatus.NO_CONTENT).send();
    }  catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: String(error)
      });
    }
  }
}
