import {AggregateRoot} from '../../../Shared/domain/AggregateRoot';
import {HRDefenderSheetHistoryId} from '../../Shared/domain/HRDefenderSheetHistory/HRDefenderSheetHistoryId';
import {UserId} from '../../Shared/domain/Users/UserId';
import {HRDefenderSheetId} from '../../Shared/domain/HRDefendersSheets/HRDefenderSheetId';

export class HRDefenderSheetHistory extends AggregateRoot {
  public readonly id: HRDefenderSheetHistoryId;
  public readonly date: Date;
  public readonly authorId: UserId;
  public readonly documentId: HRDefenderSheetId;
  public readonly oldDocument: object;
  public readonly newDocument: object;
  public deleted: boolean;

  constructor(
    id: HRDefenderSheetHistoryId,
    date: Date,
    authorId: UserId,
    documentId: HRDefenderSheetId,
    oldDocument: object,
    newDocument: object,
    deleted: boolean
  ) {
    super();
    this.id = id;
    this.date = date;
    this.authorId = authorId;
    this.documentId = documentId;
    this.oldDocument = oldDocument;
    this.newDocument = newDocument;
    this.deleted = deleted;
  }
  public static fromPrimitives(plainData: {
      id: string,
      date: Date,
      authorId: string,
      documentId: string,
      oldDocument: object,
      newDocument: object,
      deleted: boolean
    }
  ): HRDefenderSheetHistory {
    return new HRDefenderSheetHistory(
      new HRDefenderSheetHistoryId(plainData.id),
      new Date(plainData.date),
      new UserId(plainData.authorId),
      new HRDefenderSheetId(plainData.documentId),
      plainData.oldDocument,
      plainData.newDocument,
      plainData.deleted
    );
  }

  public toPrimitives(): any {
    return {
      id: this.id.value,
      date: this.date,
      authorId: this.authorId.value,
      documentId: this.documentId.value,
      oldDocument: this.oldDocument,
      newDocument: this.newDocument,
      deleted: this.deleted
    };
  }
  public toDocument() {
    return {
      id: this.id.value,
      date: this.date,
      authorId: this.authorId.value,
      documentId: this.documentId.value,
      oldDocument: this.oldDocument,
      newDocument: this.newDocument
    }
  }
}
