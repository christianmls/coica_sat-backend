import {UserRepository} from '../domain/UserRepository';
import {UserId} from '../../Shared/domain/Users/UserId';

export class UserByIdFinder {
  private repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async run(userId: string) {
    const user = await this.repository.searchById(new UserId(userId));
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    return user.toDocument();
  }
}
