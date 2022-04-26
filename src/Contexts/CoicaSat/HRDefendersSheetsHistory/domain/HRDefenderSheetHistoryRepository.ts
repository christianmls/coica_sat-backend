import {HRDefenderSheetHistory} from './HRDefenderSheetHistory';
import {HRDefenderSheetHistoryId} from '../../Shared/domain/HRDefenderSheetHistory/HRDefenderSheetHistoryId';

export interface HRDefenderSheetHistoryRepository {
  getAll(): Promise<HRDefenderSheetHistory[]>;
  searchAllPaginated(query: object, pagination: { pageNumber: number, nPerPage: number }): Promise<HRDefenderSheetHistory[]>;
  save(HRDefenderSheet: HRDefenderSheetHistory): Promise<void>;
  delete(id: HRDefenderSheetHistoryId): Promise<void>;
  count(query: object): Promise<number>;
}
