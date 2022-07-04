import {AggregateRoot} from '../../../Shared/domain/AggregateRoot';
import {ApplicationForMonitoringId} from '../../Shared/domain/ApplicationsForMonitoring/ApplicationForMonitoringId';
import {UserId} from '../../Shared/domain/Users/UserId';

export class ApplicationForMonitoring extends AggregateRoot {
  public readonly id: ApplicationForMonitoringId;
  public readonly status: string;
  public readonly details: string;
  public readonly userId: UserId;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;
  public deleted: boolean;

  constructor(
    id: ApplicationForMonitoringId,
    createdAt: Date,
    status: string,
    details: string,
    userId: UserId,
    updatedAt: Date,
    deleted: boolean
  ) {
    super();
    this.id = id;
    this.createdAt = createdAt;
    this.status = status;
    this.details = details;
    this.userId = userId;
    this.updatedAt = updatedAt;
    this.deleted = deleted;
  }

  public static fromPrimitives({
      id,
     createdAt,
      status,
      details,
      userId,
      updatedAt,
      deleted
    }: {
      id: string;
      createdAt: Date;
      status: string;
      details: string;
      userId: string;
      updatedAt: Date;
      deleted: boolean;
    }
  ): ApplicationForMonitoring {
    return new ApplicationForMonitoring(
      new ApplicationForMonitoringId(id),
      new Date(createdAt),
      status,
      details,
      new UserId(userId),
      new Date(updatedAt),
      deleted
    );
  }

  toPrimitives(): any {
    return {
      id: this.id.value,
      createdAt: this.createdAt,
      status: this.status,
      details: this.details,
      userId: this.userId.value,
      updatedAt: this.updatedAt,
      deleted: this.deleted
    };
  }

  toDocument() {
    return {
      id: this.id.value,
      createdAt: this.createdAt,
      status: this.status,
      details: this.details,
      userId: this.userId.value,
      updatedAt: this.updatedAt
    };
  }
}
