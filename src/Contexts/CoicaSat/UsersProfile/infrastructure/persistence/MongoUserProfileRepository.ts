import { Nullable } from '../../../../Shared/domain/Nullable';
import { MongoRepository } from '../../../../Shared/infrastructure/persistence/mongo/MongoRepository';
import {UserProfile} from '../../domain/UserProfile';
import {UserProfileRepository} from '../../domain/UserProfileRepository';
import {UserProfileId} from '../../../Shared/domain/UsersProfile/UserProfileId';

export interface UserProfileDocument {
  _id: string;
  names: string;
  lastNames: string;
  birthDate: Date;
  userId: string;
}

export class MongoUserProfileRepository extends MongoRepository<UserProfile> implements UserProfileRepository {

  async searchAll(): Promise<Array<UserProfile>> {
    const roles = await this.findAll<UserProfileDocument>();

    return roles?.map(role =>
      UserProfile.fromPrimitives({
          id: role._id,
          names: role.names,
          lastNames: role.lastNames,
          birthDate: role.birthDate,
          userId: role.userId
        }
      )) ?? [];
  }

  public save(employee: UserProfile): Promise<void> {
    return this.persist(employee.id.value, employee);
  }

  public async searchById(id: UserProfileId): Promise<Nullable<UserProfile>> {
    const document = await this.findOne<UserProfileDocument>({ _id: id.value });

    return document ? UserProfile.fromPrimitives({
      names: document.names,
      lastNames: document.lastNames,
      birthDate: document.birthDate,
      userId: document.userId, id: id.value
    }) : null;
  }

  protected collectionName(): string {
    return 'users-profile';
  }
}
