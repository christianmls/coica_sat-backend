import {AggregateRoot} from '../../../Shared/domain/AggregateRoot';
import {ApplicationForMonitoringId} from '../../Shared/domain/ApplicationsForMonitoring/ApplicationForMonitoringId';
import {UserId} from '../../Shared/domain/Users/UserId';

export class ApplicationForMonitoring extends AggregateRoot {
  public readonly id: ApplicationForMonitoringId;
  public readonly date: Date;
  public readonly status: string;
  public readonly details: string;
  public readonly userId: UserId;

  constructor(
    id: ApplicationForMonitoringId,
    date: Date,
    status: string,
    details: string,
    userId: UserId,
  ) {
    super();
    this.id = id;
    this.date = date;
    this.status = status;
    this.details = details;
    this.userId = userId;
  }

  public static fromPrimitives({
      id,
      date,
      status,
      details,
      userId,
    }: {
      id: string;
      date: Date;
      status: string;
      details: string;
      userId: string;
    }
  ): ApplicationForMonitoring {
    return new ApplicationForMonitoring(
      new ApplicationForMonitoringId(id),
      new Date(date),
      status,
      details,
      new UserId(userId),
    );
  }

  toPrimitives(): any {
    return {
      id: this.id.value,
      date: this.date,
      status: this.status,
      details: this.details,
      userId: this.userId.value,
    };
  }
}
