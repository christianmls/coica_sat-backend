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
    return this.repository.delete(new HRDefenderSheetId(id));
  }
}
