import {HRDefenderSheetRepository} from '../domain/HRDefenderSheetRepository';
import {PaginateItemsResponse} from '../../Shared/application/PaginateItemsResponse';

export class HRDefenderSheetFinder {
  private repository: HRDefenderSheetRepository;

  constructor(repository: HRDefenderSheetRepository) {
    this.repository = repository;
  }

  async run(query: object, { pageNumber, nPerPage }: { pageNumber: number, nPerPage: number }) {
    const totalHrDefenderSheets = await this.repository.count({...query, deleted: false});
    const hrDefenderSheets = await this.repository.searchAllPaginated({...query, deleted: false}, { pageNumber, nPerPage });
    const hrDefenderSheetsPrimitives = hrDefenderSheets.map(hrDefenderSheet => hrDefenderSheet.toDocument());
    return new PaginateItemsResponse(hrDefenderSheetsPrimitives, totalHrDefenderSheets, nPerPage, pageNumber);
  }
}
