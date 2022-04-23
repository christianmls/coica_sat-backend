import {AggregateRoot} from '../../../Shared/domain/AggregateRoot';
import {UserId} from '../../Shared/domain/Users/UserId';
import {InvalidArgumentError} from '../../../Shared/domain/value-object/InvalidArgumentError';

export class User extends AggregateRoot {

  public readonly  id: UserId;
  public readonly email: string;
  public readonly password: string;
  public readonly names: string;
  public readonly lastNames: string;
  public readonly phone: string;
  public readonly  birthDate: Date;
  public readonly role: Array<string>;
  public readonly country: string;

  constructor({id, email, password, role, names, lastNames, phone, birthDate, country }: {id: UserId, email: string, password: string, role: string, names: string, lastNames: string, phone: string, birthDate: Date, country: string}) {
    super();

    this.ensurePasswordLength(password);

    this.id = id;
    this.email = email;
    this.password = password;
    this.role = ['user'];
    this.names = names;
    this.lastNames = lastNames;
    this.phone = phone;
    this.birthDate = birthDate;
    this.country = country;
  }

  private ensurePasswordLength(password: string): void {
    if (password.length < 6) {
      throw new InvalidArgumentError(`Password must be at least 6 characters`);
    }
  }

  public static fromPrimitives(planData: {id: string, email: string, password: string, names: string, lastNames: string, phone: string, birthDate: Date, role: string, country: string}): User {
    return new User({
      id: new UserId(planData.id),
      email: planData.email,
      password: planData.password,
      role: planData.role,
      names: planData.names,
      lastNames: planData.lastNames,
      phone: planData.phone,
      birthDate: planData.birthDate,
      country: planData.country
    });
  }

  toPrimitives(): any {
    return {
      id: this.id.value,
      email: this.email,
      password: this.password,
      names: this.names,
      lastNames: this.lastNames,
      phone: this.phone,
      birthDate: this.birthDate,
      role: this.role,
      country: this.country
    };
  }
}
