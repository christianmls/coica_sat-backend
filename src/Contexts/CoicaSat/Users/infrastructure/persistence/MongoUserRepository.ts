import {MongoRepository} from '../../../../Shared/infrastructure/persistence/mongo/MongoRepository';
import {User} from '../../domain/User';
import {UserRepository} from '../../domain/UserRepository';
import {UserId} from '../../../Shared/domain/Users/UserId';
import {Nullable} from '../../../../Shared/domain/Nullable';

export interface UserDocument {
  _id: string;
  email: string;
  password: string;
  names: string;
  lastNames: string;
  phone: string;
  birthDate: Date;
  role: string;
}

export class MongoUserRepository extends MongoRepository<User> implements UserRepository {

  async findByEmail(email: string): Promise<Nullable<User>> {
    const document = await this.findOne<UserDocument>( { email: email });

    return document ? User.fromPrimitives({
      id: document._id,
      email: document.email,
      password: document.password,
      names: document.names,
      lastNames: document.lastNames,
      phone: document.phone,
      birthDate: document.birthDate,
      role: document.role
    }) : null;
  }

  async searchAll(): Promise<Array<User>> {
    const users = await this.findAll<UserDocument>();
    return users?.map(user => User.fromPrimitives({
      id: user._id,
      email: user.email,
      password: user.password,
      role: user.role,
      names: user.names,
      lastNames: user.lastNames,
      phone: user.phone,
      birthDate: user.birthDate
    })) ?? [];
  }

  async searchAllPaginated(pagination: { pageNumber: number, nPerPage: number }) {
    const users = await this.findAll<UserDocument>({}, pagination);
    return users?.map(user => User.fromPrimitives({
      id: user._id,
      email: user.email,
      password: user.password,
      role: user.role,
      names: user.names,
      lastNames: user.lastNames,
      phone: user.phone,
      birthDate: user.birthDate
    })) ?? [];
  }

  public save(user: User): Promise<void> {
    return this.persist(user.id.value, user);
  }

  public delete(userId: UserId): Promise<void> {
    return this.removeById(userId.value);
  }
  public async searchById(id: UserId): Promise<Nullable<User>> {
    const document = await this.findOne<UserDocument>( { _id: id.value });

    return document ? User.fromPrimitives({
      id: document._id,
      email: document.email,
      password: document.password,
      role: document.role,
      names: document.names,
      lastNames: document.lastNames,
      phone: document.phone,
      birthDate: document.birthDate
    }) : null;
  }

  public count(): Promise<number> {
    return this.countDocuments();
  }

  protected collectionName(): string {
    return 'users';
  }
}
