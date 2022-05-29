import {RecoverPasswordRepository} from '../domain/RecoverPasswordRepository';

export class RecoverPasswordFindOne {
  private repository: RecoverPasswordRepository;

  constructor(repository: RecoverPasswordRepository) {
    this.repository = repository;
  }

  async run(query: object) {
    return await this.repository.searchOne(query);
  }
}
