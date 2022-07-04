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
  role: Array<string>;
  country: string;
  photo: string;
  community: string;
  deleted: boolean;
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
      role: document.role,
      country: document.country,
      photo: document.photo,
      community: document.community,
      deleted: document.deleted
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
      birthDate: user.birthDate,
      country: user.country,
      photo: user.photo,
      community: user.community,
      deleted: user.deleted
    })) ?? [];
  }

  async searchAllPaginated(query: object, pagination: { pageNumber: number, nPerPage: number }) {
    const users = await this.findAll<UserDocument>(query, pagination);
    return users?.map(user => User.fromPrimitives({
      id: user._id,
      email: user.email,
      password: user.password,
      role: user.role,
      names: user.names,
      lastNames: user.lastNames,
      phone: user.phone,
      birthDate: user.birthDate,
      country: user.country,
      photo: user.photo,
      community: user.community,
      deleted: user.deleted
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
      birthDate: document.birthDate,
      country: document.country,
      photo: document.photo,
      community: document.community,
      deleted: document.deleted
    }) : null;
  }

  public count(query: object): Promise<number> {
    return this.countDocuments(query);
  }

  protected collectionName(): string {
    return 'users';
  }
}
