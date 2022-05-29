import {RecoverPasswordRepository} from '../domain/RecoverPasswordRepository';
import {RecoverPasswordDocumentRequest} from './RecoverPasswordDocumentRequest';
import {RecoverPassword} from '../domain/RecoverPassword';

export class RecoverPasswordCreator {
  private repository: RecoverPasswordRepository;

  constructor(repository: RecoverPasswordRepository) {
    this.repository = repository;
  }

  async run(request: RecoverPasswordDocumentRequest): Promise<void> {
    const recoverPassword = RecoverPassword.fromPrimitives({
      id: request.id,
      email: request.email,
      token: request.token,
      createdAt: request.createdAt
    });
    return this.repository.save(recoverPassword);
  }
}
