import {AggregateRoot} from '../../../Shared/domain/AggregateRoot';
import {HRDefenderSheetId} from '../../Shared/domain/HRDefendersSheets/HRDefenderSheetId';

export class HRDefenderSheet extends AggregateRoot {
  public readonly id: HRDefenderSheetId;
  public readonly country: string;
  public readonly threatType: string;
  public readonly location: string;
  public readonly originTown: string;
  public readonly threatOtherType: Array<string>;
  public readonly rightsViolatedType: Array<string>;
  public readonly rightsViolatedOtherType: string;
  public readonly responseType: string;
  public readonly relationShipCOVIDType: Array<string>;
  public readonly relationShipCOVIDOtherType: string;
  public readonly threatAuthor: string;
  public readonly factsReported: string;
  public readonly informationSource: Array<string>;
  public readonly informationSourceOther: string;
  public readonly indicateMeans: string;
  public readonly thereWasLegalAction: string;
  public readonly thereWasAndAnswered: string;
  public readonly defenderName: string;
  public readonly UTMCoordinates: string;
  public readonly contactDetails: string;
  public readonly communityBase: string;
  public readonly completedBy: string;
  public readonly personName: string;
  public readonly requestCountry: string;
  public readonly requestType: Array<string>;
  public readonly requestAuthor: string;
  public readonly requestNumber: string;
  public readonly toWhomWasRequested: string;
  public readonly requestDescription: string;
  public readonly requestShortDescription: string;
  public readonly reportingCommunityBase: string;
  public readonly organizationName: string;
  public readonly organizationPersonName: string;

  constructor(id: HRDefenderSheetId, country: string, threatType: string, location: string, originTown: string, threatOtherType: Array<string>, rightsViolatedType: Array<string>, rightsViolatedOtherType: string, responseType: string, relationShipCOVIDType: Array<string>, relationShipCOVIDOtherType: string, threatAuthor: string, factsReported: string, informationSource: Array<string>, informationSourceOther: string, indicateMeans: string, thereWasLegalAction: string, thereWasAndAnswered: string, defenderName: string, UTMCoordinates: string, contactDetails: string, communityBase: string, completedBy: string, personName: string, requestCountry: string, requestType: Array<string>, requestAuthor: string, requestNumber: string, toWhomWasRequested: string, requestDescription: string, requestShortDescription: string, reportingCommunityBase: string, organizationName: string, organizationPersonName: string) {
    super();
    this.id = id;
    this.country = country;
    this.threatType = threatType;
    this.location = location;
    this.originTown = originTown;
    this.threatOtherType = threatOtherType;
    this.rightsViolatedType = rightsViolatedType;
    this.rightsViolatedOtherType = rightsViolatedOtherType;
    this.responseType = responseType;
    this.relationShipCOVIDType = relationShipCOVIDType;
    this.relationShipCOVIDOtherType = relationShipCOVIDOtherType;
    this.threatAuthor = threatAuthor;
    this.factsReported = factsReported;
    this.informationSource = informationSource;
    this.informationSourceOther = informationSourceOther;
    this.indicateMeans = indicateMeans;
    this.thereWasLegalAction = thereWasLegalAction;
    this.thereWasAndAnswered = thereWasAndAnswered;
    this.defenderName = defenderName;
    this.UTMCoordinates = UTMCoordinates;
    this.contactDetails = contactDetails;
    this.communityBase = communityBase;
    this.completedBy = completedBy;
    this.personName = personName;
    this.requestCountry = requestCountry;
    this.requestType = requestType;
    this.requestAuthor = requestAuthor;
    this.requestNumber = requestNumber;
    this.toWhomWasRequested = toWhomWasRequested;
    this.requestDescription = requestDescription;
    this.requestShortDescription = requestShortDescription;
    this.reportingCommunityBase = reportingCommunityBase;
    this.organizationName = organizationName;
    this.organizationPersonName = organizationPersonName;
  }

  public static fromPrimitives({
    id,
    country,
    threatType,
    location,
    originTown,
    threatOtherType,
    rightsViolatedType,
    rightsViolatedOtherType,
    responseType,
    relationShipCOVIDType,
    relationShipCOVIDOtherType,
    threatAuthor,
    factsReported,
    informationSource,
    informationSourceOther,
    indicateMeans,
    thereWasLegalAction,
    thereWasAndAnswered,
    defenderName,
    UTMCoordinates,
    contactDetails,
    communityBase,
    completedBy,
    personName,
    requestCountry,
    requestType,
    requestAuthor,
    requestNumber,
    toWhomWasRequested,
    requestDescription,
    requestShortDescription,
    reportingCommunityBase,
    organizationName,
    organizationPersonName}: {
    id: string,
    country: string,
    threatType: string,
    location: string,
    originTown: string,
    threatOtherType: Array<string>,
    rightsViolatedType: Array<string>,
    rightsViolatedOtherType: string,
    responseType: string,
    relationShipCOVIDType: Array<string>,
    relationShipCOVIDOtherType: string,
    threatAuthor: string,
    factsReported: string,
    informationSource: Array<string>,
    informationSourceOther: string,
    indicateMeans: string,
    thereWasLegalAction: string,
    thereWasAndAnswered: string,
    defenderName: string,
    UTMCoordinates: string,
    contactDetails: string,
    communityBase: string,
    completedBy: string,
    personName: string,
    requestCountry: string,
    requestType: Array<string>,
    requestAuthor: string,
    requestNumber: string,
    toWhomWasRequested: string,
    requestDescription: string,
    requestShortDescription: string,
    reportingCommunityBase: string,
    organizationName: string,
    organizationPersonName: string,
  }): HRDefenderSheet {
    return new HRDefenderSheet(
      new HRDefenderSheetId(id),
      country,
      threatType,
      location,
      originTown,
      threatOtherType,
      rightsViolatedType,
      rightsViolatedOtherType,
      responseType,
      relationShipCOVIDType,
      relationShipCOVIDOtherType,
      threatAuthor,
      factsReported,
      informationSource,
      informationSourceOther,
      indicateMeans,
      thereWasLegalAction,
      thereWasAndAnswered,
      defenderName,
      UTMCoordinates,
      contactDetails,
      communityBase,
      completedBy,
      personName,
      requestCountry,
      requestType,
      requestAuthor,
      requestNumber,
      toWhomWasRequested,
      requestDescription,
      requestShortDescription,
      reportingCommunityBase,
      organizationName,
      organizationPersonName,
    );
  }
  toPrimitives(): any {
    return {
      id: this.id.value,
      country: this.country,
      threatType: this.threatType,
      location: this.location,
      originTown: this.originTown,
      threatOtherType: this.threatOtherType,
      rightsViolatedType: this.rightsViolatedType,
      rightsViolatedOtherType: this.rightsViolatedOtherType,
      responseType: this.responseType,
      relationShipCOVIDType: this.relationShipCOVIDType,
      relationShipCOVIDOtherType: this.relationShipCOVIDOtherType,
      threatAuthor: this.threatAuthor,
      factsReported: this.factsReported,
      informationSource: this.informationSource,
      informationSourceOther: this.informationSourceOther,
      indicateMeans: this.indicateMeans,
      thereWasLegalAction: this.thereWasLegalAction,
      thereWasAndAnswered: this.thereWasAndAnswered,
      defenderName: this.defenderName,
      UTMCoordinates: this.UTMCoordinates,
      contactDetails: this.contactDetails,
      communityBase: this.communityBase,
      completedBy: this.completedBy,
      personName: this.personName,
      requestCountry: this.requestCountry,
      requestType: this.requestType,
      requestAuthor: this.requestAuthor,
      requestNumber: this.requestNumber,
      toWhomWasRequested: this.toWhomWasRequested,
      requestDescription: this.requestDescription,
      requestShortDescription: this.requestShortDescription,
      reportingCommunityBase: this.reportingCommunityBase,
      organizationName: this.organizationName,
      organizationPersonName: this.organizationPersonName
    };
  }
}
