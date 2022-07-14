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
      genderThreatType: request.genderThreatType,
      community: request.community,
      originTown: request.originTown,
      latLocation: request.latLocation,
      longLocation: request.longLocation,
      addressLocation: request.addressLocation,
      threatAttackType: request.threatAttackType,
      threatAttackOtherType: request.threatAttackOtherType,
      rightsViolatedType: request.rightsViolatedType,
      rightsViolatedOtherType: request.rightsViolatedOtherType,
      relationShipCOVIDyesNo: request.relationShipCOVIDyesNo,
      relationShipCOVIDType: request.relationShipCOVIDType,
      relationShipCOVIDOtherType: request.relationShipCOVIDOtherType,
      allegedAuthor: request.allegedAuthor,
      allegedAuthorOther: request.allegedAuthorOther,
      factsReported: request.factsReported,
      factsReportedAudio: request.factsReportedAudio,
      informationSource: request.informationSource,
      informationSourceOther: request.informationSourceOther,
      indicateMeansVerification: request.indicateMeansVerification,
      thereWasLegalAction: request.thereWasLegalAction,
      thereWasAndAnsweredState: request.thereWasAndAnsweredState,
      defenderName: request.defenderName,
      latUTMCoordinates: request.latUTMCoordinates,
      logUTMCoordinates: request.logUTMCoordinates,
      elvUTMCoordinates: request.elvUTMCoordinates,
      descriptionUTMCoordinates: request.descriptionUTMCoordinates,
      contactEmail: request.contactEmail,
      contactPhone: request.contactPhone,
      communityBase: request.communityBase,
      organizationBase: request.organizationBase,
      completedBy: request.completedBy,
      userById: request.userById,
      dateFill: request.dateFill,
      countryFormRequest: request.countryFormRequest,
      requestTypeFormRequest: request.requestTypeFormRequest,
      requestOtherTypeFormRequest: request.requestOtherTypeFormRequest,
      requestAuthorFormRequest: request.requestAuthorFormRequest,
      requestNumberFormRequest: request.requestNumberFormRequest,
      requestDateFormRequest: request.requestDateFormRequest,
      toWhomWasRequestedFormRequest: request.toWhomWasRequestedFormRequest,
      requestDescriptionFormRequest: request.requestDescriptionFormRequest,
      resumeDescriptionFormRequest: request.resumeDescriptionFormRequest,
      communityBaseFormRequest: request.communityBaseFormRequest,
      organizationBaseFormRequest: request.organizationBaseFormRequest,
      completedByFormRequest: request.completedByFormRequest,
      dateFillFormRequest: request.dateFillFormRequest,
      status: request.status,
      processing: request.processing,
      uploaded: request.uploaded,
      description: request.description,
      deleteField: request.deleteField,
      autoDate: request.autoDate,
      autoDateUpdate: request.autoDateUpdate,
      deleted: false
    });
    const oldDocument = await this.repository.searchById(hrDefenderSheet.id);
    await this.repository.save(hrDefenderSheet);

    if (oldDocument) {
      const newDocument = diff(oldDocument.toPrimitives(), hrDefenderSheet.toPrimitives());
      const hrDefenderSheetHistory = HRDefenderSheetHistory.fromPrimitives({
        id: new HRDefenderSheetHistoryId().value,
        documentId: hrDefenderSheet.id.value,
        date: new Date(),
        authorId: hrDefenderSheet.userById.value,
        oldDocument: hrDefenderSheet.toPrimitives(),
        newDocument,
        deleted: false
      });
      return this.historyRepository.save(hrDefenderSheetHistory);
    }
  }
}
