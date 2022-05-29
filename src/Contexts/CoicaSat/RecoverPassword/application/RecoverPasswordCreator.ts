import {RecoverPasswordRepository} from '../domain/RecoverPasswordRepository';
import {RecoverPasswordDocumentRequest} from './RecoverPasswordDocumentRequest';
import {RecoverPassword} from '../domain/RecoverPassword';
import {UserRepository} from '../../Users/domain/UserRepository';
import {EmailService} from '../../Shared/domain/EmailService';

export class RecoverPasswordCreator {
  private repository: RecoverPasswordRepository;
  private userRepository: UserRepository;
  private emailService: EmailService;

  constructor(repository: RecoverPasswordRepository, userRepository: UserRepository, emailService: EmailService) {
    this.repository = repository;
    this.userRepository = userRepository;
    this.emailService = emailService;
  }

  async run(request: RecoverPasswordDocumentRequest): Promise<void> {
    const user = await this.userRepository.findByEmail(request.email);
    if (!user) {
      throw new Error('Este usuario no existe');
    }
    const recoverPassword = RecoverPassword.fromPrimitives({
      id: request.id,
      email: request.email,
      token: request.token,
      createdAt: request.createdAt
    });
    await this.emailService.send({
      to: request.email,
      subject: 'Recuperar contraseña',
      body: `El código para recuperar la contraseña es: ${request.token}`
    });
    return this.repository.save(recoverPassword);
  }
}
