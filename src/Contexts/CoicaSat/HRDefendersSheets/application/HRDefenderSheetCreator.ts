import {HRDefenderSheetRepository} from '../domain/HRDefenderSheetRepository';
import {HRDefenderSheetDocumentRequest} from './HRDefenderSheetDocumentRequest';
import {HRDefenderSheet} from '../domain/HRDefenderSheet';

export class HRDefenderSheetCreator {
  private repository: HRDefenderSheetRepository;

  constructor(repository: HRDefenderSheetRepository) {
    this.repository = repository;
  }

  async run(request: HRDefenderSheetDocumentRequest): Promise<void> {
    const hrDefenderSheet = HRDefenderSheet.fromPrimitives({
      id: request.id,
      country: request.country,
      threatType: request.threatType,
      location: request.location,
      originTown: request.originTown,
      threatOtherType: request.threatOtherType,
      rightsViolatedType: request.rightsViolatedType,
      rightsViolatedOtherType: request.rightsViolatedOtherType,
      defenderName: request.defenderName,
      communityBase: request.communityBase,
      completedBy: request.completedBy,
      contactDetails: request.contactDetails,
      factsReported: request.factsReported,
      indicateMeans: request.indicateMeans,
      informationSource: request.informationSource,
      informationSourceOther: request.informationSourceOther,
      organizationName: request.organizationName,
      organizationPersonName: request.organizationPersonName,
      personName: request.personName,
      relationShipCOVIDOtherType: request.relationShipCOVIDOtherType,
      relationShipCOVIDType: request.relationShipCOVIDType,
      reportingCommunityBase: request.reportingCommunityBase,
      requestAuthor: request.requestAuthor,
      requestCountry: request.requestCountry,
      requestDescription: request.requestDescription,
      requestNumber: request.requestNumber,
      requestShortDescription: request.requestShortDescription,
      requestType: request.requestType,
      responseType: request.responseType,
      thereWasAndAnswered: request.thereWasAndAnswered,
      thereWasLegalAction: request.thereWasLegalAction,
      threatAuthor: request.threatAuthor,
      toWhomWasRequested: request.toWhomWasRequested,
      UTMCoordinates: request.UTMCoordinates,
      status: request.status,
      processing: request.processing
    });
    return this.repository.save(hrDefenderSheet);
  }
}
