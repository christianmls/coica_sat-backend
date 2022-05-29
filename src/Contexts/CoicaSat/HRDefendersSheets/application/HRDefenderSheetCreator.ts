import {HRDefenderSheetRepository} from '../domain/HRDefenderSheetRepository';
import {HRDefenderSheetDocumentRequest} from './HRDefenderSheetDocumentRequest';
import {HRDefenderSheet} from '../domain/HRDefenderSheet';
import {HRDefenderSheetHistoryRepository} from '../../HRDefendersSheetsHistory/domain/HRDefenderSheetHistoryRepository';
import {HRDefenderSheetHistory} from '../../HRDefendersSheetsHistory/domain/HRDefenderSheetHistory';
import {HRDefenderSheetHistoryId} from '../../Shared/domain/HRDefenderSheetHistory/HRDefenderSheetHistoryId';
import { diff } from 'deep-object-diff';

export class HRDefenderSheetCreator {
  private repository: HRDefenderSheetRepository;
  private historyRepository: HRDefenderSheetHistoryRepository;

  constructor(repository: HRDefenderSheetRepository, historyRepository: HRDefenderSheetHistoryRepository) {
    this.repository = repository;
    this.historyRepository = historyRepository;
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
      processing: request.processing,
      mobileLatitude: request.mobileLatitude,
      mobileLongitude: request.mobileLongitude,
      mobileAddress: request.mobileAddress,
      gpsId: request.gpsId,
      xLongitude: request.xLongitude,
      yLatitude: request.yLatitude,
      zRise: request.zRise,
      description: request.description
    });
    const oldDocument = await this.repository.searchById(hrDefenderSheet.id);
    await this.repository.save(hrDefenderSheet);

    if (oldDocument) {
      const newDocument = diff(oldDocument.toPrimitives(), hrDefenderSheet.toPrimitives());
      const hrDefenderSheetHistory = HRDefenderSheetHistory.fromPrimitives({
        id: new HRDefenderSheetHistoryId().value,
        documentId: hrDefenderSheet.id.value,
        date: new Date(),
        authorId: hrDefenderSheet.requestAuthor,
        oldDocument: hrDefenderSheet.toPrimitives(),
        newDocument
      });
      return this.historyRepository.save(hrDefenderSheetHistory);
    }
  }
}
