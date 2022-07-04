import {
  HRDefenderSheetRepository
} from '../domain/HRDefenderSheetRepository';
import {HRDefenderSheetId} from '../../Shared/domain/HRDefendersSheets/HRDefenderSheetId';

export class HRDefenderSheetRemover {
  private repository: HRDefenderSheetRepository;

  constructor(repository: HRDefenderSheetRepository) {
    this.repository = repository;
  }

  async run(id: string): Promise<void> {
    const hrDefenderSheet = await this.repository.searchById(new HRDefenderSheetId(id));
    if (!hrDefenderSheet) {
      throw new Error(`Documento con id ${ id } no existe`);
    }
    hrDefenderSheet.deleted = true;
    return this.repository.save(hrDefenderSheet);
  }
}
