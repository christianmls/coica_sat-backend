import {ApplicationForMonitoringRepository} from '../domain/ApplicationForMonitoringRepository';
import {PaginateItemsResponse} from '../../Shared/application/PaginateItemsResponse';
import {UserRepository} from '../../Users/domain/UserRepository';

export class ApplicationForMonitoringFinder {
  private repository: ApplicationForMonitoringRepository;
  private userRepository: UserRepository;

  constructor(repository: ApplicationForMonitoringRepository, userRepository: UserRepository) {
    this.repository = repository;
    this.userRepository = userRepository;
  }

  async run(query: object, { pageNumber, nPerPage }: { pageNumber: number, nPerPage: number }) {
    const totalApplicationsForMonitoring = await this.repository.count(query);
    const applicationsForMonitoring = await this.repository.searchAllPaginated(query, { pageNumber, nPerPage });
    const applicationsForMonitoringPrimitives = await this.addUserToApplicationsForMonitoring(applicationsForMonitoring);
    return new PaginateItemsResponse(applicationsForMonitoringPrimitives, totalApplicationsForMonitoring, nPerPage, pageNumber);
  }
  private async addUserToApplicationsForMonitoring(applicationsForMonitoring: any[]) {
    return await Promise.all(applicationsForMonitoring.map(async applicationForMonitoring => {
      const user = await this.userRepository.searchById(applicationForMonitoring.userId);
      return {
        ...applicationForMonitoring.toPrimitives(),
        user: user?.toPrimitives() ?? {}
      };
    }));
  }
}
