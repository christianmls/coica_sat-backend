import {AggregateRoot} from '../../../Shared/domain/AggregateRoot';
import {UserProfileId} from '../../Shared/domain/UsersProfile/UserProfileId';
import {UserId} from '../../Shared/domain/Users/UserId';

export class UserProfile extends  AggregateRoot {
  public readonly id: UserProfileId;
  public readonly names: string;
  public readonly lastNames: string
  public readonly  birthDate: Date;
  public readonly userId: UserId;

  constructor({ id, names, lastNames, birthDate, userId }: { id: UserProfileId, names: string, lastNames: string, birthDate: Date, userId: UserId }) {
    super();
    this.id = id;
    this.names = names;
    this.lastNames = lastNames;
    this.birthDate = birthDate;
    this.userId = userId;
  }

  public static fromPrimitives(plainData: { id: string, names: string, lastNames: string, birthDate: Date, userId: string }): UserProfile {
    return new UserProfile({
      id: new UserProfileId(plainData.id),
      names: plainData.names,
      lastNames: plainData.lastNames,
      birthDate: plainData.birthDate,
      userId: new UserId(plainData.userId)
    });
  }

  public toPrimitives(): any {
    return {
      id: this.id.value,
      names: this.names,
      lastNames: this.lastNames,
      birthDate: this.birthDate,
      userId: this.userId.value
    };
  }
}
