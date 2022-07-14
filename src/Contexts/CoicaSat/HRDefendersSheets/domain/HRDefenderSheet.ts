import {AggregateRoot} from '../../../Shared/domain/AggregateRoot';
import {HRDefenderSheetId} from '../../Shared/domain/HRDefendersSheets/HRDefenderSheetId';
import {UserId} from '../../Shared/domain/Users/UserId';

export class HRDefenderSheet extends AggregateRoot {
  public readonly id: HRDefenderSheetId;
  public readonly country: string;
  public readonly threatType: string;
  public readonly genderThreatType: string;
  public readonly community: string;
  public readonly originTown: string;
  public readonly latLocation: string;
  public readonly longLocation: string;
  public readonly addressLocation: string;
  public readonly threatAttackType: Array<string>;
  public readonly threatAttackOtherType: string;
  public readonly rightsViolatedType: Array<string>;
  public readonly rightsViolatedOtherType: string;
  public readonly relationShipCOVIDyesNo: string;
  public readonly relationShipCOVIDType: Array<string>;
  public readonly relationShipCOVIDOtherType: string;
  public readonly allegedAuthor: Array<string>;
  public readonly allegedAuthorOther: string;
  public readonly factsReported: string;
  public readonly factsReportedAudio: Array<string>;
  public readonly informationSource: Array<string>;
  public readonly informationSourceOther: string;
  public readonly indicateMeansVerification: string;
  public readonly thereWasLegalAction: string;
  public readonly thereWasAndAnsweredState: string;
  public readonly defenderName: string;
  public readonly latUTMCoordinates: string;
  public readonly logUTMCoordinates: string;
  public readonly elvUTMCoordinates: string;
  public readonly descriptionUTMCoordinates: string;
  public readonly contactEmail: string;
  public readonly contactPhone: string;
  public readonly communityBase: string;
  public readonly organizationBase: string;
  public readonly completedBy: string;
  public readonly userById: UserId;
  public readonly dateFill: string;
  public readonly countryFormRequest: string;
  public readonly requestTypeFormRequest: Array<string>;
  public readonly requestOtherTypeFormRequest: string;
  public readonly requestAuthorFormRequest: string;
  public readonly requestNumberFormRequest: string;
  public readonly requestDateFormRequest: string;
  public readonly toWhomWasRequestedFormRequest: string;
  public readonly requestDescriptionFormRequest: string;
  public readonly resumeDescriptionFormRequest: string;
  public readonly communityBaseFormRequest: string;
  public readonly organizationBaseFormRequest: string;
  public readonly completedByFormRequest: string;
  public readonly dateFillFormRequest: string;
  public readonly status: string;
  public readonly processing: string;
  public readonly uploaded: string;
  public readonly description: string;
  public readonly deleteField: string;
  public readonly autoDate: string;
  public readonly autoDateUpdate: string;
  public deleted: boolean;

  constructor(id: HRDefenderSheetId, country: string, threatType: string, genderThreatType: string, community: string, originTown: string, latLocation: string, longLocation: string, addressLocation: string, threatAttackType: Array<string>, threatAttackOtherType: string, rightsViolatedType: Array<string>, rightsViolatedOtherType: string, relationShipCOVIDyesNo: string, relationShipCOVIDType: Array<string>, relationShipCOVIDOtherType: string, allegedAuthor: Array<string>, allegedAuthorOther: string, factsReported: string, factsReportedAudio: Array<string>, informationSource: Array<string>, informationSourceOther: string, indicateMeansVerification: string, thereWasLegalAction: string, thereWasAndAnsweredState: string, defenderName: string, latUTMCoordinates: string, logUTMCoordinates: string, elvUTMCoordinates: string, descriptionUTMCoordinates: string, contactEmail: string, contactPhone: string, communityBase: string, organizationBase: string, completedBy: string, userById: UserId, dateFill: string, countryFormRequest: string, requestTypeFormRequest: Array<string>, requestOtherTypeFormRequest: string, requestAuthorFormRequest: string, requestNumberFormRequest: string, requestDateFormRequest: string, toWhomWasRequestedFormRequest: string, requestDescriptionFormRequest: string, resumeDescriptionFormRequest: string, communityBaseFormRequest: string, organizationBaseFormRequest: string, completedByFormRequest: string, dateFillFormRequest: string, status: string, processing: string, uploaded: string, description: string, deleteField: string, autoDate: string, autoDateUpdate: string, deleted: boolean) {
    super();
    this.id = id;
    this.country = country;
    this.threatType = threatType;
    this.genderThreatType = genderThreatType;
    this.community = community;
    this.originTown = originTown;
    this.latLocation = latLocation;
    this.longLocation = longLocation;
    this.addressLocation = addressLocation;
    this.threatAttackType = threatAttackType;
    this.threatAttackOtherType = threatAttackOtherType;
    this.rightsViolatedType = rightsViolatedType;
    this.rightsViolatedOtherType = rightsViolatedOtherType;
    this.relationShipCOVIDyesNo = relationShipCOVIDyesNo;
    this.relationShipCOVIDType = relationShipCOVIDType;
    this.relationShipCOVIDOtherType = relationShipCOVIDOtherType;
    this.allegedAuthor = allegedAuthor;
    this.allegedAuthorOther = allegedAuthorOther;
    this.factsReported = factsReported;
    this.factsReportedAudio = factsReportedAudio;
    this.informationSource = informationSource;
    this.informationSourceOther = informationSourceOther;
    this.indicateMeansVerification = indicateMeansVerification;
    this.thereWasLegalAction = thereWasLegalAction;
    this.thereWasAndAnsweredState = thereWasAndAnsweredState;
    this.defenderName = defenderName;
    this.latUTMCoordinates = latUTMCoordinates;
    this.logUTMCoordinates = logUTMCoordinates;
    this.elvUTMCoordinates = elvUTMCoordinates;
    this.descriptionUTMCoordinates = descriptionUTMCoordinates;
    this.contactEmail = contactEmail;
    this.contactPhone = contactPhone;
    this.communityBase = communityBase;
    this.organizationBase = organizationBase;
    this.completedBy = completedBy;
    this.userById = userById;
    this.dateFill = dateFill;
    this.countryFormRequest = countryFormRequest;
    this.requestTypeFormRequest = requestTypeFormRequest;
    this.requestOtherTypeFormRequest = requestOtherTypeFormRequest;
    this.requestAuthorFormRequest = requestAuthorFormRequest;
    this.requestNumberFormRequest = requestNumberFormRequest;
    this.requestDateFormRequest = requestDateFormRequest;
    this.toWhomWasRequestedFormRequest = toWhomWasRequestedFormRequest;
    this.requestDescriptionFormRequest = requestDescriptionFormRequest;
    this.resumeDescriptionFormRequest = resumeDescriptionFormRequest;
    this.communityBaseFormRequest = communityBaseFormRequest;
    this.organizationBaseFormRequest = organizationBaseFormRequest;
    this.completedByFormRequest = completedByFormRequest;
    this.dateFillFormRequest = dateFillFormRequest;
    this.status = status;
    this.processing = processing;
    this.uploaded = uploaded;
    this.description = description;
    this.deleteField = deleteField;
    this.autoDate = autoDate;
    this.autoDateUpdate = autoDateUpdate;
    this.deleted = deleted;
  }

  public static fromPrimitives(planData: {id: string, country: string, threatType: string, genderThreatType: string, community: string, originTown: string, latLocation: string, longLocation: string, addressLocation: string, threatAttackType: Array<string>, threatAttackOtherType: string, rightsViolatedType: Array<string>, rightsViolatedOtherType: string, relationShipCOVIDyesNo: string, relationShipCOVIDType: Array<string>, relationShipCOVIDOtherType: string, allegedAuthor: Array<string>, allegedAuthorOther: string, factsReported: string, factsReportedAudio: Array<string>, informationSource: Array<string>, informationSourceOther: string, indicateMeansVerification: string, thereWasLegalAction: string, thereWasAndAnsweredState: string, defenderName: string, latUTMCoordinates: string, logUTMCoordinates: string, elvUTMCoordinates: string, descriptionUTMCoordinates: string, contactEmail: string, contactPhone: string, communityBase: string, organizationBase: string, completedBy: string, userById: string, dateFill: string, countryFormRequest: string, requestTypeFormRequest: Array<string>, requestOtherTypeFormRequest: string, requestAuthorFormRequest: string, requestNumberFormRequest: string, requestDateFormRequest: string, toWhomWasRequestedFormRequest: string, requestDescriptionFormRequest: string, resumeDescriptionFormRequest: string, communityBaseFormRequest: string, organizationBaseFormRequest: string, completedByFormRequest: string, dateFillFormRequest: string, status: string, processing: string, uploaded: string, description: string, deleteField: string, autoDate: string, autoDateUpdate: string, deleted: boolean
  }): HRDefenderSheet {
    return new HRDefenderSheet(
      new HRDefenderSheetId(planData.id),
      planData.country,
      planData.threatType,
      planData.genderThreatType,
      planData.community,
      planData.originTown,
      planData.latLocation,
      planData.longLocation,
      planData.addressLocation,
      planData.threatAttackType,
      planData.threatAttackOtherType,
      planData.rightsViolatedType,
      planData.rightsViolatedOtherType,
      planData.relationShipCOVIDyesNo,
      planData.relationShipCOVIDType,
      planData.relationShipCOVIDOtherType,
      planData.allegedAuthor,
      planData.allegedAuthorOther,
      planData.factsReported,
      planData.factsReportedAudio,
      planData.informationSource,
      planData.informationSourceOther,
      planData.indicateMeansVerification,
      planData.thereWasLegalAction,
      planData.thereWasAndAnsweredState,
      planData.defenderName,
      planData.latUTMCoordinates,
      planData.logUTMCoordinates,
      planData.elvUTMCoordinates,
      planData.descriptionUTMCoordinates,
      planData.contactEmail,
      planData.contactPhone,
      planData.communityBase,
      planData.organizationBase,
      planData.completedBy,
      new UserId(planData.userById),
      planData.dateFill,
      planData.countryFormRequest,
      planData.requestTypeFormRequest,
      planData.requestOtherTypeFormRequest,
      planData.requestAuthorFormRequest,
      planData.requestNumberFormRequest,
      planData.requestDateFormRequest,
      planData.toWhomWasRequestedFormRequest,
      planData.requestDescriptionFormRequest,
      planData.resumeDescriptionFormRequest,
      planData.communityBaseFormRequest,
      planData.organizationBaseFormRequest,
      planData.completedByFormRequest,
      planData.dateFillFormRequest,
      planData.status,
      planData.processing,
      planData.uploaded,
      planData.description,
      planData.deleteField,
      planData.autoDate,
      planData.autoDateUpdate,
      planData.deleted
    );
  }

  toPrimitives(): any {
    return {
      id: this.id,
      country: this.country,
      threatType: this.threatType,
      genderThreatType: this.genderThreatType,
      community: this.community,
      originTown: this.originTown,
      latLocation: this.latLocation,
      longLocation: this.longLocation,
      addressLocation: this.addressLocation,
      threatAttackType: this.threatAttackType,
      threatAttackOtherType: this.threatAttackOtherType,
      rightsViolatedType: this.rightsViolatedType,
      rightsViolatedOtherType: this.rightsViolatedOtherType,
      relationShipCOVIDyesNo: this.relationShipCOVIDyesNo,
      relationShipCOVIDType: this.relationShipCOVIDType,
      relationShipCOVIDOtherType: this.relationShipCOVIDOtherType,
      allegedAuthor: this.allegedAuthor,
      allegedAuthorOther: this.allegedAuthorOther,
      factsReported: this.factsReported,
      factsReportedAudio: this.factsReportedAudio,
      informationSource: this.informationSource,
      informationSourceOther: this.informationSourceOther,
      indicateMeansVerification: this.indicateMeansVerification,
      thereWasLegalAction: this.thereWasLegalAction,
      thereWasAndAnsweredState: this.thereWasAndAnsweredState,
      defenderName: this.defenderName,
      latUTMCoordinates: this.latUTMCoordinates,
      logUTMCoordinates: this.logUTMCoordinates,
      elvUTMCoordinates: this.elvUTMCoordinates,
      descriptionUTMCoordinates: this.descriptionUTMCoordinates,
      contactEmail: this.contactEmail,
      contactPhone: this.contactPhone,
      communityBase: this.communityBase,
      organizationBase: this.organizationBase,
      completedBy: this.completedBy,
      userById: this.userById,
      dateFill: this.dateFill,
      countryFormRequest: this.countryFormRequest,
      requestTypeFormRequest: this.requestTypeFormRequest,
      requestOtherTypeFormRequest: this.requestOtherTypeFormRequest,
      requestAuthorFormRequest: this.requestAuthorFormRequest,
      requestNumberFormRequest: this.requestNumberFormRequest,
      requestDateFormRequest: this.requestDateFormRequest,
      toWhomWasRequestedFormRequest: this.toWhomWasRequestedFormRequest,
      requestDescriptionFormRequest: this.requestDescriptionFormRequest,
      resumeDescriptionFormRequest: this.resumeDescriptionFormRequest,
      communityBaseFormRequest: this.communityBaseFormRequest,
      organizationBaseFormRequest: this.organizationBaseFormRequest,
      completedByFormRequest: this.completedByFormRequest,
      dateFillFormRequest: this.dateFillFormRequest,
      status: this.status,
      processing: this.processing,
      uploaded: this.uploaded,
      description: this.description,
      deleteField: this.deleteField,
      autoDate: this.autoDate,
      autoDateUpdate: this.autoDateUpdate,
      deleted: this.deleted,
    };
  }

  toDocument(): any {
    return {
      id: this.id,
      country: this.country,
      threatType: this.threatType,
      genderThreatType: this.genderThreatType,
      community: this.community,
      originTown: this.originTown,
      latLocation: this.latLocation,
      longLocation: this.longLocation,
      addressLocation: this.addressLocation,
      threatAttackType: this.threatAttackType,
      threatAttackOtherType: this.threatAttackOtherType,
      rightsViolatedType: this.rightsViolatedType,
      rightsViolatedOtherType: this.rightsViolatedOtherType,
      relationShipCOVIDyesNo: this.relationShipCOVIDyesNo,
      relationShipCOVIDType: this.relationShipCOVIDType,
      relationShipCOVIDOtherType: this.relationShipCOVIDOtherType,
      allegedAuthor: this.allegedAuthor,
      allegedAuthorOther: this.allegedAuthorOther,
      factsReported: this.factsReported,
      factsReportedAudio: this.factsReportedAudio,
      informationSource: this.informationSource,
      informationSourceOther: this.informationSourceOther,
      indicateMeansVerification: this.indicateMeansVerification,
      thereWasLegalAction: this.thereWasLegalAction,
      thereWasAndAnsweredState: this.thereWasAndAnsweredState,
      defenderName: this.defenderName,
      latUTMCoordinates: this.latUTMCoordinates,
      logUTMCoordinates: this.logUTMCoordinates,
      elvUTMCoordinates: this.elvUTMCoordinates,
      descriptionUTMCoordinates: this.descriptionUTMCoordinates,
      contactEmail: this.contactEmail,
      contactPhone: this.contactPhone,
      communityBase: this.communityBase,
      organizationBase: this.organizationBase,
      completedBy: this.completedBy,
      userById: this.userById,
      dateFill: this.dateFill,
      countryFormRequest: this.countryFormRequest,
      requestTypeFormRequest: this.requestTypeFormRequest,
      requestOtherTypeFormRequest: this.requestOtherTypeFormRequest,
      requestAuthorFormRequest: this.requestAuthorFormRequest,
      requestNumberFormRequest: this.requestNumberFormRequest,
      requestDateFormRequest: this.requestDateFormRequest,
      toWhomWasRequestedFormRequest: this.toWhomWasRequestedFormRequest,
      requestDescriptionFormRequest: this.requestDescriptionFormRequest,
      resumeDescriptionFormRequest: this.resumeDescriptionFormRequest,
      communityBaseFormRequest: this.communityBaseFormRequest,
      organizationBaseFormRequest: this.organizationBaseFormRequest,
      completedByFormRequest: this.completedByFormRequest,
      dateFillFormRequest: this.dateFillFormRequest,
      status: this.status,
      processing: this.processing,
      uploaded: this.uploaded,
      description: this.description,
      deleteField: this.deleteField,
      autoDate: this.autoDate,
      autoDateUpdate: this.autoDateUpdate
    };
  }
}
