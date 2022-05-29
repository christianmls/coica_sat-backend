import {RecoverPasswordRepository} from '../domain/RecoverPasswordRepository';
import {UserRepository} from '../../Users/domain/UserRepository';
import {ChangePasswordDocumentRequest} from './ChangePasswordDocumentRequest';
import {User} from '../../Users/domain/User';
import {EncryptionService} from '../../Users/domain/EncryptionService';

export class ChangePasswordCreator {
  private repository: RecoverPasswordRepository;
  private userRepository: UserRepository;
  private encryption: EncryptionService;

  constructor(repository: RecoverPasswordRepository, userRepository: UserRepository, encryption: EncryptionService) {
    this.repository = repository;
    this.userRepository = userRepository;
    this.encryption = encryption;
  }

  async run(request: ChangePasswordDocumentRequest): Promise<void> {
    const recoverPasswordRequest = await this.repository.searchOne({token: request.token});
    if (!recoverPasswordRequest) {
      throw new Error('Token invalido');
    }
    const user = await this.userRepository.findByEmail(recoverPasswordRequest.email);
    if (!user) {
      throw new Error('Este usuario no existe');
    }
    const newUser = User.fromPrimitives({
      ...user.toPrimitives(),
      id: user.id.value,
      password: this.encryption.encrypt(request.newPassword)
    });
    await this.userRepository.save(newUser);
    return this.repository.delete(recoverPasswordRequest.id);
  }
}
