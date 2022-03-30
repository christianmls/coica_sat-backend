import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from '../Controller';
import {UserLoggedRequest} from '../../shared/types';
import {
  HRDefenderSheetCreator
} from '../../../../../Contexts/CoicaSat/HRDefendersSheets/application/HRDefenderSheetCreator';

export type HRDefenderSheetBodyRequest = UserLoggedRequest & Request & {
  body: {
    id: string;
    country: string;
    threatType: string;
    location: string;
    originTown: string;
    threatOtherType: string;
    rightsViolatedType: string;
    rightsViolatedOtherType: string;
    responseType: string;
    relationShipCOVIDType: string;
    relationShipCOVIDOtherType: string;
    threatAuthor: string;
    factsReported: string;
    informationSource: string;
    informationSourceOther: string;
    indicateMeans: string;
    thereWasLegalAction: string;
    thereWasAndAnswered: string;
    defenderName: string;
    UTMCoordinates: string;
    contactDetails: string;
    communityBase: string;
    completedBy: string;
    personName: string;
    requestCountry: string;
    requestType: string;
    requestAuthor: string;
    requestNumber: string;
    toWhomWasRequested: string;
    requestDescription: string;
    requestShortDescription: string;
    reportingCommunityBase: string;
    organizationName: string;
    organizationPersonName: string;
  }
};

export class HRDefenderSheetPutController implements Controller {
  constructor(private hrDefenderSheetCreator: HRDefenderSheetCreator) {}

  async run(req: HRDefenderSheetBodyRequest, res: Response) {
    const { body  } = req;
    await this.hrDefenderSheetCreator.run({ ...body  });
    res.status(httpStatus.OK).send();
  }
}
