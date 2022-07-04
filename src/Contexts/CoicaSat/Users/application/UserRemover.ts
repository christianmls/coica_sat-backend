import {UserRepository} from '../domain/UserRepository';
import {UserId} from '../../Shared/domain/Users/UserId';

export class UserRemover {
  private repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async run(id: string): Promise<void> {
    const user = await this.repository.searchById(new UserId(id));
    if (!user) {
      throw new Error(`Documento con id ${ id } no existe`);
    }
    user.deleted = true;
    return this.repository.save(user);
  }
}
