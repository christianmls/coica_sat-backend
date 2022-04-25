import {ApplicationForMonitoringRepository} from '../domain/ApplicationForMonitoringRepository';
import {ApplicationForMonitoringRequest} from './ApplicationForMonitoringRequest';
import {ApplicationForMonitoring} from '../domain/ApplicationForMonitoring';
import {applicationForMonitoringStatusList} from '../domain/applicationForMonitoringStatusList';
import {UserRepository} from '../../Users/domain/UserRepository';

export class ApplicationForMonitoringCreator {
  private repository: ApplicationForMonitoringRepository;
  private userRepository: UserRepository;

  constructor(repository: ApplicationForMonitoringRepository, userRepository: UserRepository) {
    this.repository = repository;
    this.userRepository = userRepository;
  }

  async run(request: ApplicationForMonitoringRequest): Promise<void> {
    const applicationForMonitoring = ApplicationForMonitoring.fromPrimitives({
      id: request.id,
      status: request.status,
      date: request.date,
      details: request.details,
      userId: request.userId
    });

    if (this.compareStatuses(applicationForMonitoring.status, applicationForMonitoringStatusList.APPROVED) ||
      this.compareStatuses(applicationForMonitoring.status, applicationForMonitoringStatusList.REJECTED)) {
      const user = await this.userRepository.searchById(applicationForMonitoring.userId);
      if (!user) {
        throw new Error('User not found');
      }
      user.updateRoleByStatus(applicationForMonitoring.status);
      await this.userRepository.save(user);
    }
    return this.repository.save(applicationForMonitoring);
  }
  private compareStatuses(status1: string, status2: string): boolean {
    return status1 === status2;
  }
}
