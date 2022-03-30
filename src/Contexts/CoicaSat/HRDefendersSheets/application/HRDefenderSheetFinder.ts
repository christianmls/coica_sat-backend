import {HRDefenderSheetRepository} from '../domain/HRDefenderSheetRepository';

export class HRDefenderSheetFinder {
  private repository: HRDefenderSheetRepository;

  constructor(repository: HRDefenderSheetRepository) {
    this.repository = repository;
  }

  async run() {
    const hrDefenderSheets = await this.repository.getAll();
    return hrDefenderSheets.map(hrDefenderSheet => hrDefenderSheet.toPrimitives());
  }
}
