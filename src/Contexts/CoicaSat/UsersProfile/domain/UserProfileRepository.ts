
import {Nullable} from '../../../Shared/domain/Nullable';
import {UserProfileId} from '../../Shared/domain/UsersProfile/UserProfileId';
import {UserProfile} from './UserProfile';

export interface UserProfileRepository {
  save(employee: UserProfile): Promise<void>;
  searchAll(): Promise<Array<UserProfile>>;
  searchById(id: UserProfileId): Promise<Nullable<UserProfile>>;
}
