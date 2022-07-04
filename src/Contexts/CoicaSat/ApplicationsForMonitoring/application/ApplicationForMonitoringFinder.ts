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

  async run(query: any, { pageNumber, nPerPage }: { pageNumber: number, nPerPage: number }) {
    const queryDB = query['userCreatorId'] ? { userCreatorId: query['userCreatorId'] } : {};
    const applicationsForMonitoring = await this.repository.getAll({ ...queryDB, deleted: false });
    const applicationsForMonitoringPrimitives = await this.addUserToApplicationsForMonitoring(applicationsForMonitoring);
    const applicationsForMonitoringPrimitivesByUserCountry = query['country'] ?
      this.filterByUserCountry(applicationsForMonitoringPrimitives, query) : applicationsForMonitoringPrimitives;
    const totalApplicationsForMonitoring = applicationsForMonitoringPrimitivesByUserCountry.length;
    return new PaginateItemsResponse(this.paginatedItems(applicationsForMonitoringPrimitivesByUserCountry, pageNumber, nPerPage), totalApplicationsForMonitoring, nPerPage, pageNumber);
  }
  private async addUserToApplicationsForMonitoring(applicationsForMonitoring: any[]) {
    return await Promise.all(applicationsForMonitoring.map(async applicationForMonitoring => {
      const user = await this.userRepository.searchById(applicationForMonitoring.userId);
      return {
        ...applicationForMonitoring.toDocument(),
        user: user?.toPrimitives() ?? {}
      };
    }));
  }

  private filterByUserCountry(applicationsForMonitoringPrimitives: any[], query: any) {
    return applicationsForMonitoringPrimitives.filter(applicationForMonitoringPrimitive => {
      const user = applicationForMonitoringPrimitive.user;
      return user.country === query['country'];
    });
  }

  private paginatedItems(items: any[], pageNumber: number, nPerPage: number) {
    const start = (pageNumber - 1) * nPerPage;
    const end = start + nPerPage;
    return items.slice(start, end);
  }
}
