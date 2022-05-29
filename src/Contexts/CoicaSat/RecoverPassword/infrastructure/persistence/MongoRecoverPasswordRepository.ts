import {MongoRepository} from '../../../../Shared/infrastructure/persistence/mongo/MongoRepository';
import {Nullable} from '../../../../Shared/domain/Nullable';
import {RecoverPassword} from '../../domain/RecoverPassword';
import {RecoverPasswordId} from '../../../Shared/domain/RecoverPassword/RecoverPasswordId';
import {RecoverPasswordRepository} from '../../domain/RecoverPasswordRepository';

interface RecoverPasswordDocument {
  _id: string;
  email: string;
  token: string;
  createdAt: Date;
}

export class MongoRecoverPasswordRepository extends MongoRepository<RecoverPassword> implements RecoverPasswordRepository {

  delete(id: RecoverPasswordId): Promise<void> {
    return this.removeById(id.value);
  }

  public async searchAllPaginated(query: object, pagination: { pageNumber: number, nPerPage: number }) {
    const recoverPasswordDocuments = await this.findAll<RecoverPasswordDocument>(query, pagination);
    return this.recoverPasswordDocumentsToPrimitives(recoverPasswordDocuments as RecoverPasswordDocument[]);
  }

  async getAll(): Promise<RecoverPassword[]> {
    const recoverPasswordDocuments = await this.findAll<RecoverPasswordDocument>();
    return this.recoverPasswordDocumentsToPrimitives(recoverPasswordDocuments as RecoverPasswordDocument[]);
  }

  public async searchById(id: RecoverPasswordId): Promise<Nullable<RecoverPassword>> {
    const recoverPassword = await this.findOne<RecoverPasswordDocument>({ _id: id.value });

    return recoverPassword ? RecoverPassword.fromPrimitives({
      id: id.value,
      email: recoverPassword.email,
      token: recoverPassword.token,
      createdAt: recoverPassword.createdAt
    }) : null;
  }

  private recoverPasswordDocumentsToPrimitives(recoverPasswords: RecoverPasswordDocument[]): RecoverPassword[] {
    return recoverPasswords?.map(recoverPassword => {
      return RecoverPassword.fromPrimitives({
        id: recoverPassword._id,
        email: recoverPassword.email,
        token: recoverPassword.token,
        createdAt: recoverPassword.createdAt
      });
    }) ?? [];
  }
  save(recoverPassword: RecoverPassword): Promise<void> {
    return this.persist(recoverPassword.id.value, recoverPassword);
  }

  public count(query: object): Promise<number> {
    return this.countDocuments(query);
  }
  protected collectionName(): string {
    return 'recover-passwords';
  }
}
