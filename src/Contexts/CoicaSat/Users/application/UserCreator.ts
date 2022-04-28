import {UserRepository} from '../domain/UserRepository';
import {User} from '../domain/User';
import {CreateUserRequest} from './CreateUserRequest';
import { EncryptionService } from '../domain/EncryptionService';

export class UserCreator {
  private repository: UserRepository;
  private encryption: EncryptionService;

  constructor(repository: UserRepository, encryption: EncryptionService) {
    this.repository = repository;
    this.encryption = encryption;
  }

  async run(request: CreateUserRequest): Promise<void> {
    const user = User.fromPrimitives({
      id: request.id,
      email: request.email,
      password: this.encryption.encrypt(request.password),
      role: request.role ?? ['user'],
      names: request.names,
      lastNames: request.lastNames,
      phone: request.phone,
      birthDate: request.birthDate,
      country: request.country,
      photo: request.photo,
      community: request.community
    });
    const userExists = await this.repository.findByEmail(user.email);
    if (userExists) {
      throw new Error('User already exists');
    }
    return this.repository.save(user);
  }
}
