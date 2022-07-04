
import {PaginateItemsResponse} from '../../Shared/application/PaginateItemsResponse';
import {HRDefenderSheetHistoryRepository} from '../domain/HRDefenderSheetHistoryRepository';

export class HRDefenderSheetHistoryFinder {
  private repository: HRDefenderSheetHistoryRepository;

  constructor(repository: HRDefenderSheetHistoryRepository) {
    this.repository = repository;
  }

  async run(query: object, { pageNumber, nPerPage }: { pageNumber: number, nPerPage: number }) {
    const totalHrDefenderSheetsHistory = await this.repository.count({...query, deleted: false});
    const hrDefenderSheetHistories = await this.repository.searchAllPaginated(query, { pageNumber, nPerPage });
    const hrDefenderSheetsHistoriesPrimitives = hrDefenderSheetHistories.map(hrDefenderSheet => hrDefenderSheet.toPrimitives());
    return new PaginateItemsResponse(hrDefenderSheetsHistoriesPrimitives, totalHrDefenderSheetsHistory, nPerPage, pageNumber);
  }
}
