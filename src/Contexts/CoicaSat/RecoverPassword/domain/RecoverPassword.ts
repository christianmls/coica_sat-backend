import {AggregateRoot} from '../../../Shared/domain/AggregateRoot';
import {RecoverPasswordId} from '../../Shared/domain/RecoverPassword/RecoverPasswordId';

export class RecoverPassword extends AggregateRoot {
  public readonly id: RecoverPasswordId;
  public readonly email: string;
  public readonly token: string;
  public readonly createdAt: Date;
  constructor(id: RecoverPasswordId, email: string, token: string, createdAt: Date) {
    super();
    this.id = id;
    this.email = email;
    this.token = token;
    this.createdAt = createdAt;
  }
  public static fromPrimitives(planData: {id: string, email: string, token: string, createdAt: Date}): RecoverPassword {
    return new RecoverPassword(
      new RecoverPasswordId(planData.id),
      planData.email,
      planData.token,
      planData.createdAt
    );
  }

  toPrimitives(): any {
    return {
      id: this.id.value,
      email: this.email,
      token: this.token,
      createdAt: this.createdAt
    };
  }
}
