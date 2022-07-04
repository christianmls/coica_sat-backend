import {ApplicationForMonitoringRepository} from '../domain/ApplicationForMonitoringRepository';
import {ApplicationForMonitoringId} from '../../Shared/domain/ApplicationsForMonitoring/ApplicationForMonitoringId';

export class ApplicationForMonitoringRemover {
  private repository: ApplicationForMonitoringRepository;

  constructor(repository: ApplicationForMonitoringRepository) {
    this.repository = repository;
  }

  async run(id: string): Promise<void> {
    const applicationForMonitoring = await this.repository.searchById(new ApplicationForMonitoringId(id));
    if (!applicationForMonitoring) {
      throw new Error(`Documento con id ${ id } no existe`);
    }
    applicationForMonitoring.deleted = true;
    return this.repository.save(applicationForMonitoring);
  }
}
