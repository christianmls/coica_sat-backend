import {HRDefenderSheetRepository} from '../../domain/HRDefenderSheetRepository';
import {MongoRepository} from '../../../../Shared/infrastructure/persistence/mongo/MongoRepository';
import {HRDefenderSheet} from '../../domain/HRDefenderSheet';
import {HRDefenderSheetId} from '../../../Shared/domain/HRDefendersSheets/HRDefenderSheetId';
import {Nullable} from '../../../../Shared/domain/Nullable';

interface HRDefenderSheetDocument {
    _id: string;
    country: string;
  threatType: string;
  location: string;
  originTown: string;
  threatOtherType: Array<string>;
  rightsViolatedType: Array<string>;
  rightsViolatedOtherType: string;
  responseType: string;
  relationShipCOVIDType: Array<string>;
  relationShipCOVIDOtherType: string;
  threatAuthor: string;
  factsReported: string;
  informationSource: Array<string>;
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
  requestType: Array<string>;
  requestAuthor: string;
  requestNumber: string;
  toWhomWasRequested: string;
  requestDescription: string;
  requestShortDescription: string;
  reportingCommunityBase: string;
  organizationName: string;
  organizationPersonName: string;
  status: string;
  processing: boolean;
  mobileLatitude: string;
  mobileLongitude: string;
  mobileAddress: string;
  gpsId: string;
  xLongitude: string;
  yLatitude: string;
  zRise: string;
  description: string;
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
      location: hrDefenderSheet.location,
      originTown: hrDefenderSheet.originTown,
      threatOtherType: hrDefenderSheet.threatOtherType,
      rightsViolatedType: hrDefenderSheet.rightsViolatedType,
      rightsViolatedOtherType: hrDefenderSheet.rightsViolatedOtherType,
      responseType: hrDefenderSheet.responseType,
      relationShipCOVIDType: hrDefenderSheet.relationShipCOVIDType,
      relationShipCOVIDOtherType: hrDefenderSheet.relationShipCOVIDOtherType,
      threatAuthor: hrDefenderSheet.threatAuthor,
      factsReported: hrDefenderSheet.factsReported,
      informationSource: hrDefenderSheet.informationSource,
      informationSourceOther: hrDefenderSheet.informationSourceOther,
      indicateMeans: hrDefenderSheet.indicateMeans,
      thereWasLegalAction: hrDefenderSheet.thereWasLegalAction,
      thereWasAndAnswered: hrDefenderSheet.thereWasAndAnswered,
      defenderName: hrDefenderSheet.defenderName,
      UTMCoordinates: hrDefenderSheet.UTMCoordinates,
      contactDetails: hrDefenderSheet.contactDetails,
      communityBase: hrDefenderSheet.communityBase,
      completedBy: hrDefenderSheet.completedBy,
      personName: hrDefenderSheet.personName,
      requestCountry: hrDefenderSheet.requestCountry,
      requestType: hrDefenderSheet.requestType,
      requestAuthor: hrDefenderSheet.requestAuthor,
      requestNumber: hrDefenderSheet.requestNumber,
      toWhomWasRequested: hrDefenderSheet.toWhomWasRequested,
      requestDescription: hrDefenderSheet.requestDescription,
      requestShortDescription: hrDefenderSheet.requestShortDescription,
      reportingCommunityBase: hrDefenderSheet.reportingCommunityBase,
      organizationName: hrDefenderSheet.organizationName,
      organizationPersonName: hrDefenderSheet.organizationPersonName,
      status: hrDefenderSheet.status,
      processing: hrDefenderSheet.processing,
      mobileLatitude: hrDefenderSheet.mobileLatitude,
      mobileLongitude: hrDefenderSheet.mobileLongitude,
      mobileAddress: hrDefenderSheet.mobileAddress,
      gpsId: hrDefenderSheet.gpsId,
      xLongitude: hrDefenderSheet.xLongitude,
      yLatitude: hrDefenderSheet.yLatitude,
      zRise: hrDefenderSheet.zRise,
      description: hrDefenderSheet.description,
      deleted: hrDefenderSheet.deleted
    }) : null;
  }

  private hrDefenderSheetDocumentsToPrimitives(hrDefenderSheetDocuments: HRDefenderSheetDocument[]): HRDefenderSheet[] {
    return hrDefenderSheetDocuments?.map(hrDefenderSheet => {
      return HRDefenderSheet.fromPrimitives({
        id: hrDefenderSheet._id,
        country: hrDefenderSheet.country,
        threatType: hrDefenderSheet.threatType,
        location: hrDefenderSheet.location,
        originTown: hrDefenderSheet.originTown,
        threatOtherType: hrDefenderSheet.threatOtherType,
        rightsViolatedType: hrDefenderSheet.rightsViolatedType,
        rightsViolatedOtherType: hrDefenderSheet.rightsViolatedOtherType,
        responseType: hrDefenderSheet.responseType,
        relationShipCOVIDType: hrDefenderSheet.relationShipCOVIDType,
        relationShipCOVIDOtherType: hrDefenderSheet.relationShipCOVIDOtherType,
        threatAuthor: hrDefenderSheet.threatAuthor,
        factsReported: hrDefenderSheet.factsReported,
        informationSource: hrDefenderSheet.informationSource,
        informationSourceOther: hrDefenderSheet.informationSourceOther,
        indicateMeans: hrDefenderSheet.indicateMeans,
        thereWasLegalAction: hrDefenderSheet.thereWasLegalAction,
        thereWasAndAnswered: hrDefenderSheet.thereWasAndAnswered,
        defenderName: hrDefenderSheet.defenderName,
        UTMCoordinates: hrDefenderSheet.UTMCoordinates,
        contactDetails: hrDefenderSheet.contactDetails,
        communityBase: hrDefenderSheet.communityBase,
        completedBy: hrDefenderSheet.completedBy,
        personName: hrDefenderSheet.personName,
        requestCountry: hrDefenderSheet.requestCountry,
        requestType: hrDefenderSheet.requestType,
        requestAuthor: hrDefenderSheet.requestAuthor,
        requestNumber: hrDefenderSheet.requestNumber,
        toWhomWasRequested: hrDefenderSheet.toWhomWasRequested,
        requestDescription: hrDefenderSheet.requestDescription,
        requestShortDescription: hrDefenderSheet.requestShortDescription,
        reportingCommunityBase: hrDefenderSheet.reportingCommunityBase,
        organizationName: hrDefenderSheet.organizationName,
        organizationPersonName: hrDefenderSheet.organizationPersonName,
        status: hrDefenderSheet.status,
        processing: hrDefenderSheet.processing,
        mobileLatitude: hrDefenderSheet.mobileLatitude,
        mobileLongitude: hrDefenderSheet.mobileLongitude,
        mobileAddress: hrDefenderSheet.mobileAddress,
        gpsId: hrDefenderSheet.gpsId,
        xLongitude: hrDefenderSheet.xLongitude,
        yLatitude: hrDefenderSheet.yLatitude,
        zRise: hrDefenderSheet.zRise,
        description: hrDefenderSheet.description,
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
