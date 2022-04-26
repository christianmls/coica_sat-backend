import {MongoRepository} from '../../../../Shared/infrastructure/persistence/mongo/MongoRepository';
import {HRDefenderSheetHistory} from '../../domain/HRDefenderSheetHistory';
import {HRDefenderSheetHistoryRepository} from '../../domain/HRDefenderSheetHistoryRepository';
import {HRDefenderSheetHistoryId} from '../../../Shared/domain/HRDefenderSheetHistory/HRDefenderSheetHistoryId';

interface HRDefenderSheetHistoryDocument {
  _id: string;
  date: Date;
  authorId: string;
  documentId: string;
  oldDocument: object;
  newDocument: object;
}

export class MongoHRDefenderSheetHistoryRepository extends MongoRepository<HRDefenderSheetHistory> implements HRDefenderSheetHistoryRepository {

  delete(id: HRDefenderSheetHistoryId): Promise<void> {
    return this.removeById(id.value);
  }

  public async searchAllPaginated(query: object, pagination: { pageNumber: number, nPerPage: number }) {
    const hrDefenderSheetHistoryDocuments = await this.findAll<HRDefenderSheetHistoryDocument>(query, pagination);
    return this.hrDefenderSheetHistoryDocumentsToPrimitives(hrDefenderSheetHistoryDocuments as HRDefenderSheetHistoryDocument[]);
  }

  async getAll(): Promise<HRDefenderSheetHistory[]> {
    const hrDefenderSheetHistoryDocuments = await this.findAll<HRDefenderSheetHistoryDocument>();
    return this.hrDefenderSheetHistoryDocumentsToPrimitives(hrDefenderSheetHistoryDocuments as HRDefenderSheetHistoryDocument[]);
  }

  private hrDefenderSheetHistoryDocumentsToPrimitives(hrDefenderSheetHistoryDocuments: HRDefenderSheetHistoryDocument[]): HRDefenderSheetHistory[] {
    return hrDefenderSheetHistoryDocuments?.map(hrDefenderSheetHistory => {
      return HRDefenderSheetHistory.fromPrimitives({
        id: hrDefenderSheetHistory._id,
        date: hrDefenderSheetHistory.date,
        authorId: hrDefenderSheetHistory.authorId,
        documentId: hrDefenderSheetHistory.documentId,
        oldDocument: hrDefenderSheetHistory.oldDocument,
        newDocument: hrDefenderSheetHistory.newDocument
      });
    }) ?? [];
  }
  save(hrDefenderSheetHistory: HRDefenderSheetHistory): Promise<void> {
    return this.persist(hrDefenderSheetHistory.id.value, hrDefenderSheetHistory);
  }

  public count(query: object): Promise<number> {
    return this.countDocuments(query);
  }
  protected collectionName(): string {
    return 'hr-defender-sheets-history';
  }

}
