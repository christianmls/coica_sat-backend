import {UserRepository} from '../domain/UserRepository';
import {UserId} from '../../Shared/domain/Users/UserId';

export class UserRemover {
  private repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async run(id: string): Promise<void> {
    return this.repository.delete(new UserId(id));
  }
}
