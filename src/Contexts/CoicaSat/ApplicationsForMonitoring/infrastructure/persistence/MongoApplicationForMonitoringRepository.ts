import {MongoRepository} from '../../../../Shared/infrastructure/persistence/mongo/MongoRepository';
import {ApplicationForMonitoring} from '../../domain/ApplicationForMonitoring';
import {ApplicationForMonitoringRepository} from '../../domain/ApplicationForMonitoringRepository';
import {ApplicationForMonitoringId} from '../../../Shared/domain/ApplicationsForMonitoring/ApplicationForMonitoringId';

interface ApplicationForMonitoringDocument {
  _id: string;
  date: Date;
  status: string;
  details: string;
  userId: string;
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

  private applicationForMonitoringDocumentsToPrimitives(applicationForMonitoringDocuments: ApplicationForMonitoringDocument[]): ApplicationForMonitoring[] {
    return applicationForMonitoringDocuments?.map(applicationForMonitoring => {
      return ApplicationForMonitoring.fromPrimitives({
        id: applicationForMonitoring._id,
        date: applicationForMonitoring.date,
        status: applicationForMonitoring.status,
        details: applicationForMonitoring.details,
        userId: applicationForMonitoring.userId
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
