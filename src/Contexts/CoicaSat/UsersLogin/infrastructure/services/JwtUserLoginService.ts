import  jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET ?? 'jwt_secret_key_123_dev';

import { UserLogged  } from '../../domain/UserLogged';
import {UserLoginService} from '../../domain/UserLoginService';
import {UserRepository} from '../../../Users/domain/UserRepository';
import {EncryptionService} from '../../../Users/domain/EncryptionService';

export class JwtUserLoginService implements UserLoginService {
  constructor(
    private userRepository: UserRepository,
    private encryptionService: EncryptionService
  ) {}

  async login({email, password}: { email: string; password: string }): Promise<UserLogged> {

    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error('User not found');
    }

    const isCorrectPassword: boolean = this.encryptionService.compareSync(password, user.password);

    if (!isCorrectPassword) {
      throw new Error('Password is incorrect');
    }

    const token = jwt.sign({
      id: user.id.value
    }, JWT_SECRET, { expiresIn: '48h' });

    return new UserLogged(token);
  }
}
