import {HRDefenderSheetRepository} from '../domain/HRDefenderSheetRepository';
import {PaginateItemsResponse} from '../../Shared/application/PaginateItemsResponse';

export class HRDefenderSheetFinder {
  private repository: HRDefenderSheetRepository;

  constructor(repository: HRDefenderSheetRepository) {
    this.repository = repository;
  }

  async run({ pageNumber, nPerPage }: { pageNumber: number, nPerPage: number }) {
    const totalHrDefenderSheets = await this.repository.count();
    const hrDefenderSheets = await this.repository.searchAllPaginated({ pageNumber, nPerPage });
    const hrDefenderSheetsPrimitives = hrDefenderSheets.map(hrDefenderSheet => hrDefenderSheet.toPrimitives());
    return new PaginateItemsResponse(hrDefenderSheetsPrimitives, totalHrDefenderSheets, nPerPage, pageNumber);
  }
}
