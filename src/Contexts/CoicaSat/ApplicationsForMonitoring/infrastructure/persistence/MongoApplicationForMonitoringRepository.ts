import {MongoRepository} from '../../../../Shared/infrastructure/persistence/mongo/MongoRepository';
import {ApplicationForMonitoring} from '../../domain/ApplicationForMonitoring';
import {ApplicationForMonitoringRepository} from '../../domain/ApplicationForMonitoringRepository';
import {ApplicationForMonitoringId} from '../../../Shared/domain/ApplicationsForMonitoring/ApplicationForMonitoringId';
import {Nullable} from '../../../../Shared/domain/Nullable';

interface ApplicationForMonitoringDocument {
  _id: string;
  createdAt: Date;
  status: string;
  details: string;
  userId: string;
  updatedAt: Date;
}
export class MongoApplicationForMonitoringRepository extends MongoRepository<ApplicationForMonitoring> implements ApplicationForMonitoringRepository {

  delete(id: ApplicationForMonitoringId): Promise<void> {
    return this.removeById(id.value);
  }

  public async searchAllPaginated(query: object, pagination: { pageNumber: number, nPerPage: number }) {
    const applicationForMonitoringDocuments = await this.findAll<ApplicationForMonitoringDocument>(query, pagination);
    return this.applicationForMonitoringDocumentsToPrimitives(applicationForMonitoringDocuments as ApplicationForMonitoringDocument[]);
  }

  async getAll(): Promise<ApplicationForMonitoring[]> {
    const applicationForMonitoringDocuments = await this.findAll<ApplicationForMonitoringDocument>();
    return this.applicationForMonitoringDocumentsToPrimitives(applicationForMonitoringDocuments as ApplicationForMonitoringDocument[]);
  }

  public async searchById(id: ApplicationForMonitoringId): Promise<Nullable<ApplicationForMonitoring>> {
    const document = await this.findOne<ApplicationForMonitoringDocument>( { _id: id.value });

    return document ? ApplicationForMonitoring.fromPrimitives({
      id: document._id,
      createdAt: document.createdAt,
      status: document.status,
      details: document.details,
      userId: document.userId,
      updatedAt: document.updatedAt
    }) : null;
  }

  private applicationForMonitoringDocumentsToPrimitives(applicationForMonitoringDocuments: ApplicationForMonitoringDocument[]): ApplicationForMonitoring[] {
    return applicationForMonitoringDocuments?.map(applicationForMonitoring => {
      return ApplicationForMonitoring.fromPrimitives({
        id: applicationForMonitoring._id,
        createdAt: applicationForMonitoring.createdAt,
        status: applicationForMonitoring.status,
        details: applicationForMonitoring.details,
        userId: applicationForMonitoring.userId,
        updatedAt: applicationForMonitoring.updatedAt
      });
    }) ?? [];
  }
  save(applicationForMonitoring: ApplicationForMonitoring): Promise<void> {
    return this.persist(applicationForMonitoring.id.value, applicationForMonitoring);
  }

  public count(query: object): Promise<number> {
    return this.countDocuments(query);
  }
  protected collectionName(): string {
    return 'applications-for-monitoring';
  }

}
