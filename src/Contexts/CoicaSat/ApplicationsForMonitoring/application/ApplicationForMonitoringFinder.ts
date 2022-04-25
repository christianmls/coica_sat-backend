import {ApplicationForMonitoringRepository} from '../domain/ApplicationForMonitoringRepository';
import {PaginateItemsResponse} from '../../Shared/application/PaginateItemsResponse';

export class ApplicationForMonitoringFinder {
  private repository: ApplicationForMonitoringRepository;

  constructor(repository: ApplicationForMonitoringRepository) {
    this.repository = repository;
  }

  async run(query: object, { pageNumber, nPerPage }: { pageNumber: number, nPerPage: number }) {
    const totalApplicationsForMonitoring = await this.repository.count(query);
    const applicationsForMonitoring = await this.repository.searchAllPaginated(query, { pageNumber, nPerPage });
    const applicationsForMonitoringPrimitives = applicationsForMonitoring.map(applicationForMonitoring => applicationForMonitoring.toPrimitives());
    return new PaginateItemsResponse(applicationsForMonitoringPrimitives, totalApplicationsForMonitoring, nPerPage, pageNumber);
  }
}
