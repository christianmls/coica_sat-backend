import {ApplicationForMonitoringId} from '../../Shared/domain/ApplicationsForMonitoring/ApplicationForMonitoringId';
import {ApplicationForMonitoring} from './ApplicationForMonitoring';

export interface ApplicationForMonitoringRepository {
  getAll(): Promise<ApplicationForMonitoring[]>;
  searchAllPaginated(query: object, pagination: { pageNumber: number, nPerPage: number }): Promise<ApplicationForMonitoring[]>;
  save(HRDefenderSheet: ApplicationForMonitoring): Promise<void>;
  delete(id: ApplicationForMonitoringId): Promise<void>;
  count(query: object): Promise<number>;
}
