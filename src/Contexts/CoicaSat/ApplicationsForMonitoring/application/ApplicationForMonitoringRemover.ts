import {ApplicationForMonitoringRepository} from '../domain/ApplicationForMonitoringRepository';
import {ApplicationForMonitoringId} from '../../Shared/domain/ApplicationsForMonitoring/ApplicationForMonitoringId';

export class ApplicationForMonitoringRemover {
  private repository: ApplicationForMonitoringRepository;

  constructor(repository: ApplicationForMonitoringRepository) {
    this.repository = repository;
  }

  async run(id: string): Promise<void> {
    return this.repository.delete(new ApplicationForMonitoringId(id));
  }
}
