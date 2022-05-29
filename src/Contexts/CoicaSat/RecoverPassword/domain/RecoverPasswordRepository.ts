
import {Nullable} from '../../../Shared/domain/Nullable';
import {RecoverPassword} from './RecoverPassword';
import {RecoverPasswordId} from '../../Shared/domain/RecoverPassword/RecoverPasswordId';

export interface RecoverPasswordRepository {
  getAll(): Promise<RecoverPassword[]>;
  searchAllPaginated(query: object, pagination: { pageNumber: number, nPerPage: number }): Promise<RecoverPassword[]>;
  searchById(id: RecoverPasswordId): Promise<Nullable<RecoverPassword>>;
  searchOne(query: object): Promise<Nullable<RecoverPassword>>;
  save(HRDefenderSheet: RecoverPassword): Promise<void>;
  delete(id: RecoverPasswordId): Promise<void>;
  count(query: object): Promise<number>;
}
