import {RecoverPasswordRepository} from '../domain/RecoverPasswordRepository';
import {RecoverPasswordId} from '../../Shared/domain/RecoverPassword/RecoverPasswordId';

export class RecoverPasswordRemover {
  private repository: RecoverPasswordRepository;

  constructor(repository: RecoverPasswordRepository) {
    this.repository = repository;
  }

  async run(id: string): Promise<void> {
    return this.repository.delete(new RecoverPasswordId(id));
  }
}
