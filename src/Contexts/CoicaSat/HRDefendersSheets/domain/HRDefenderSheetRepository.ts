import {HRDefenderSheet} from './HRDefenderSheet';
import {HRDefenderSheetId} from '../../Shared/domain/HRDefendersSheets/HRDefenderSheetId';

export interface HRDefenderSheetRepository {
  getAll(): Promise<HRDefenderSheet[]>;
  searchAllPaginated(query: object, pagination: { pageNumber: number, nPerPage: number }): Promise<HRDefenderSheet[]>;
  save(HRDefenderSheet: HRDefenderSheet): Promise<void>;
  delete(id: HRDefenderSheetId): Promise<void>;
  count(query: object): Promise<number>;
}
