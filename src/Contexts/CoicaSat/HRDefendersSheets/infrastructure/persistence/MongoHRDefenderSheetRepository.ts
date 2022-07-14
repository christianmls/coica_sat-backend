import {HRDefenderSheetRepository} from '../../domain/HRDefenderSheetRepository';
import {MongoRepository} from '../../../../Shared/infrastructure/persistence/mongo/MongoRepository';
import {HRDefenderSheet} from '../../domain/HRDefenderSheet';
import {HRDefenderSheetId} from '../../../Shared/domain/HRDefendersSheets/HRDefenderSheetId';
import {Nullable} from '../../../../Shared/domain/Nullable';

interface HRDefenderSheetDocument {
    _id: string;
    country: string;
    threatType: string;
    genderThreatType: string;
    community: string;
    originTown: string;
    latLocation: string;
    longLocation: string;
    addressLocation: string;
    threatAttackType: Array<string>;
    threatAttackOtherType: string;
    rightsViolatedType: Array<string>;
    rightsViolatedOtherType: string;
    relationShipCOVIDyesNo: string;
    relationShipCOVIDType: Array<string>;
    relationShipCOVIDOtherType: string;
    allegedAuthor: Array<string>;
    allegedAuthorOther: string;
    factsReported: string;
    factsReportedAudio: Array<string>;
    informationSource: Array<string>;
    informationSourceOther: string;
    indicateMeansVerification: string;
    thereWasLegalAction: string;
    thereWasAndAnsweredState: string;
    defenderName: string;
    latUTMCoordinates: string;
    logUTMCoordinates: string;
    elvUTMCoordinates: string;
    descriptionUTMCoordinates: string;
    contactEmail: string;
    contactPhone: string;
    communityBase: string;
    organizationBase: string;
    completedBy: string;
    userById: string;
    dateFill: string;
    countryFormRequest: string;
    requestTypeFormRequest: Array<string>;
    requestOtherTypeFormRequest: string;
    requestAuthorFormRequest: string;
    requestNumberFormRequest: string;
    requestDateFormRequest: string;
    toWhomWasRequestedFormRequest: string;
    requestDescriptionFormRequest: string;
    resumeDescriptionFormRequest: string;
    communityBaseFormRequest: string;
    organizationBaseFormRequest: string;
    completedByFormRequest: string;
    dateFillFormRequest: string;
    status: string;
    processing: string;
    uploaded: string;
    description: string;
    deleteField: string;
    autoDate: string;
    autoDateUpdate: string;
    deleted: boolean;
}

export class MongoHRDefenderSheetRepository extends MongoRepository<HRDefenderSheet> implements HRDefenderSheetRepository {

  delete(id: HRDefenderSheetId): Promise<void> {
    return this.removeById(id.value);
  }

  public async searchAllPaginated(query: object, pagination: { pageNumber: number, nPerPage: number }) {
    const hrDefenderSheetDocuments = await this.findAll<HRDefenderSheetDocument>(query, pagination);
    return this.hrDefenderSheetDocumentsToPrimitives(hrDefenderSheetDocuments as HRDefenderSheetDocument[]);
  }

  async getAll(): Promise<HRDefenderSheet[]> {
    const hrDefenderSheetDocuments = await this.findAll<HRDefenderSheetDocument>();
    return this.hrDefenderSheetDocumentsToPrimitives(hrDefenderSheetDocuments as HRDefenderSheetDocument[]);
  }

  public async searchById(id: HRDefenderSheetId): Promise<Nullable<HRDefenderSheet>> {
    const hrDefenderSheet = await this.findOne<HRDefenderSheetDocument>({ _id: id.value });

    return hrDefenderSheet ? HRDefenderSheet.fromPrimitives({
      id: id.value,
      country: hrDefenderSheet.country,
      threatType: hrDefenderSheet.threatType,
      genderThreatType: hrDefenderSheet.genderThreatType,
      community: hrDefenderSheet.community,
      originTown: hrDefenderSheet.originTown,
      latLocation: hrDefenderSheet.latLocation,
      longLocation: hrDefenderSheet.longLocation,
      addressLocation: hrDefenderSheet.addressLocation,
      threatAttackType: hrDefenderSheet.threatAttackType,
      threatAttackOtherType: hrDefenderSheet.threatAttackOtherType,
      rightsViolatedType: hrDefenderSheet.rightsViolatedType,
      rightsViolatedOtherType: hrDefenderSheet.rightsViolatedOtherType,
      relationShipCOVIDyesNo: hrDefenderSheet.relationShipCOVIDyesNo,
      relationShipCOVIDType: hrDefenderSheet.relationShipCOVIDType,
      relationShipCOVIDOtherType: hrDefenderSheet.relationShipCOVIDOtherType,
      allegedAuthor: hrDefenderSheet.allegedAuthor,
      allegedAuthorOther: hrDefenderSheet.allegedAuthorOther,
      factsReported: hrDefenderSheet.factsReported,
      factsReportedAudio: hrDefenderSheet.factsReportedAudio,
      informationSource: hrDefenderSheet.informationSource,
      informationSourceOther: hrDefenderSheet.informationSourceOther,
      indicateMeansVerification: hrDefenderSheet.indicateMeansVerification,
      thereWasLegalAction: hrDefenderSheet.thereWasLegalAction,
      thereWasAndAnsweredState: hrDefenderSheet.thereWasAndAnsweredState,
      defenderName: hrDefenderSheet.defenderName,
      latUTMCoordinates: hrDefenderSheet.latUTMCoordinates,
      logUTMCoordinates: hrDefenderSheet.logUTMCoordinates,
      elvUTMCoordinates: hrDefenderSheet.elvUTMCoordinates,
      descriptionUTMCoordinates: hrDefenderSheet.descriptionUTMCoordinates,
      contactEmail: hrDefenderSheet.contactEmail,
      contactPhone: hrDefenderSheet.contactPhone,
      communityBase: hrDefenderSheet.communityBase,
      organizationBase: hrDefenderSheet.organizationBase,
      completedBy: hrDefenderSheet.completedBy,
      userById: hrDefenderSheet.userById,
      dateFill: hrDefenderSheet.dateFill,
      countryFormRequest: hrDefenderSheet.countryFormRequest,
      requestTypeFormRequest: hrDefenderSheet.requestTypeFormRequest,
      requestOtherTypeFormRequest: hrDefenderSheet.requestOtherTypeFormRequest,
      requestAuthorFormRequest: hrDefenderSheet.requestAuthorFormRequest,
      requestNumberFormRequest: hrDefenderSheet.requestNumberFormRequest,
      requestDateFormRequest: hrDefenderSheet.requestDateFormRequest,
      toWhomWasRequestedFormRequest: hrDefenderSheet.toWhomWasRequestedFormRequest,
      requestDescriptionFormRequest: hrDefenderSheet.requestDescriptionFormRequest,
      resumeDescriptionFormRequest: hrDefenderSheet.resumeDescriptionFormRequest,
      communityBaseFormRequest: hrDefenderSheet.communityBaseFormRequest,
      organizationBaseFormRequest: hrDefenderSheet.organizationBaseFormRequest,
      completedByFormRequest: hrDefenderSheet.completedByFormRequest,
      dateFillFormRequest: hrDefenderSheet.dateFillFormRequest,
      status: hrDefenderSheet.status,
      processing: hrDefenderSheet.processing,
      uploaded: hrDefenderSheet.uploaded,
      description: hrDefenderSheet.description,
      deleteField: hrDefenderSheet.deleteField,
      autoDate: hrDefenderSheet.autoDate,
      autoDateUpdate: hrDefenderSheet.autoDateUpdate,
      deleted: hrDefenderSheet.deleted
    }) : null;
  }

  private hrDefenderSheetDocumentsToPrimitives(hrDefenderSheetDocuments: HRDefenderSheetDocument[]): HRDefenderSheet[] {
    return hrDefenderSheetDocuments?.map(hrDefenderSheet => {
      return HRDefenderSheet.fromPrimitives({
        id: hrDefenderSheet._id,
        country: hrDefenderSheet.country,
        threatType: hrDefenderSheet.threatType,
        genderThreatType: hrDefenderSheet.genderThreatType,
        community: hrDefenderSheet.community,
        originTown: hrDefenderSheet.originTown,
        latLocation: hrDefenderSheet.latLocation,
        longLocation: hrDefenderSheet.longLocation,
        addressLocation: hrDefenderSheet.addressLocation,
        threatAttackType: hrDefenderSheet.threatAttackType,
        threatAttackOtherType: hrDefenderSheet.threatAttackOtherType,
        rightsViolatedType: hrDefenderSheet.rightsViolatedType,
        rightsViolatedOtherType: hrDefenderSheet.rightsViolatedOtherType,
        relationShipCOVIDyesNo: hrDefenderSheet.relationShipCOVIDyesNo,
        relationShipCOVIDType: hrDefenderSheet.relationShipCOVIDType,
        relationShipCOVIDOtherType: hrDefenderSheet.relationShipCOVIDOtherType,
        allegedAuthor: hrDefenderSheet.allegedAuthor,
        allegedAuthorOther: hrDefenderSheet.allegedAuthorOther,
        factsReported: hrDefenderSheet.factsReported,
        factsReportedAudio: hrDefenderSheet.factsReportedAudio,
        informationSource: hrDefenderSheet.informationSource,
        informationSourceOther: hrDefenderSheet.informationSourceOther,
        indicateMeansVerification: hrDefenderSheet.indicateMeansVerification,
        thereWasLegalAction: hrDefenderSheet.thereWasLegalAction,
        thereWasAndAnsweredState: hrDefenderSheet.thereWasAndAnsweredState,
        defenderName: hrDefenderSheet.defenderName,
        latUTMCoordinates: hrDefenderSheet.latUTMCoordinates,
        logUTMCoordinates: hrDefenderSheet.logUTMCoordinates,
        elvUTMCoordinates: hrDefenderSheet.elvUTMCoordinates,
        descriptionUTMCoordinates: hrDefenderSheet.descriptionUTMCoordinates,
        contactEmail: hrDefenderSheet.contactEmail,
        contactPhone: hrDefenderSheet.contactPhone,
        communityBase: hrDefenderSheet.communityBase,
        organizationBase: hrDefenderSheet.organizationBase,
        completedBy: hrDefenderSheet.completedBy,
        userById: hrDefenderSheet.userById,
        dateFill: hrDefenderSheet.dateFill,
        countryFormRequest: hrDefenderSheet.countryFormRequest,
        requestTypeFormRequest: hrDefenderSheet.requestTypeFormRequest,
        requestOtherTypeFormRequest: hrDefenderSheet.requestOtherTypeFormRequest,
        requestAuthorFormRequest: hrDefenderSheet.requestAuthorFormRequest,
        requestNumberFormRequest: hrDefenderSheet.requestNumberFormRequest,
        requestDateFormRequest: hrDefenderSheet.requestDateFormRequest,
        toWhomWasRequestedFormRequest: hrDefenderSheet.toWhomWasRequestedFormRequest,
        requestDescriptionFormRequest: hrDefenderSheet.requestDescriptionFormRequest,
        resumeDescriptionFormRequest: hrDefenderSheet.resumeDescriptionFormRequest,
        communityBaseFormRequest: hrDefenderSheet.communityBaseFormRequest,
        organizationBaseFormRequest: hrDefenderSheet.organizationBaseFormRequest,
        completedByFormRequest: hrDefenderSheet.completedByFormRequest,
        dateFillFormRequest: hrDefenderSheet.dateFillFormRequest,
        status: hrDefenderSheet.status,
        processing: hrDefenderSheet.processing,
        uploaded: hrDefenderSheet.uploaded,
        description: hrDefenderSheet.description,
        deleteField: hrDefenderSheet.deleteField,
        autoDate: hrDefenderSheet.autoDate,
        autoDateUpdate: hrDefenderSheet.autoDateUpdate,
        deleted: hrDefenderSheet.deleted
      });
    }) ?? [];
  }
  save(hRDefenderSheet: HRDefenderSheet): Promise<void> {
    return this.persist(hRDefenderSheet.id.value, hRDefenderSheet);
  }

  public count(query: object): Promise<number> {
    return this.countDocuments(query);
  }
  protected collectionName(): string {
    return 'hr-defender-sheets';
  }

}
