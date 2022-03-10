import {UserProfileRepository} from '../domain/UserProfileRepository';
import {UserProfile} from '../domain/UserProfile';
import {CreateUserProfileRequest} from './CreateUserProfileRequest';

export class UserProfileCreator {
  private repository: UserProfileRepository;

  constructor(repository: UserProfileRepository) {
    this.repository = repository;
  }

  async run(request: CreateUserProfileRequest): Promise<void> {
    const userProfile = UserProfile.fromPrimitives({
      id: request.id,
      names: request.names,
      lastNames: request.lastNames,
      birthDate: request.birthDate,
      userId: request.userId
    });
    return this.repository.save(userProfile);
  }
}
