import {AggregateRoot} from '../../../Shared/domain/AggregateRoot';
import {UserId} from '../../Shared/domain/Users/UserId';
import {InvalidArgumentError} from '../../../Shared/domain/value-object/InvalidArgumentError';

export class User extends AggregateRoot {

  public readonly  id: UserId;
  public readonly email: string;
  public readonly password: string;
  public readonly role: string;

  constructor({id, email, password, role }: {id: UserId, email: string, password: string, role: string}) {
    super();

    this.ensurePasswordLength(password);

    this.id = id;
    this.email = email;
    this.password = password;
    this.role = 'user';
  }

  private ensurePasswordLength(password: string): void {
    if (password.length < 6) {
      throw new InvalidArgumentError(`Password must be at least 6 characters`);
    }
  }

  public static fromPrimitives(planData: {id: string, email: string, password: string, role: string}): User {
    return new User({
      id: new UserId(planData.id),
      email: planData.email,
      password: planData.password,
      role: planData.role
    });
  }

  toPrimitives(): any {
    return {
      id: this.id.value,
      email: this.email,
      password: this.password,
      role: this.role
    };
  }
}
