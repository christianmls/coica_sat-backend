import {Nullable} from '../../../Shared/domain/Nullable';
import {User} from './User';
import {UserId} from '../../Shared/domain/Users/UserId';

export interface UserRepository {
  save(user: User): Promise<void>;
  searchAll(): Promise<Array<User>>;
  searchById(id: UserId): Promise<Nullable<User>>;
  findByEmail(id: string): Promise<Nullable<User>>;
}
