import {AggregateRoot} from '../../../Shared/domain/AggregateRoot';
import {UserId} from '../../Shared/domain/Users/UserId';
import {InvalidArgumentError} from '../../../Shared/domain/value-object/InvalidArgumentError';
import {
  applicationForMonitoringStatusList
} from '../../ApplicationsForMonitoring/domain/applicationForMonitoringStatusList';
import {Roles} from '../../Shared/domain/Roles/Roles';

export class User extends AggregateRoot {

  public readonly  id: UserId;
  public readonly email: string;
  public readonly password: string;
  public readonly names: string;
  public readonly lastNames: string;
  public readonly phone: string;
  public readonly  birthDate: Date;
  public  role: Array<string>;
  public readonly country: string;
  public readonly photo: string;
  public readonly community: string;

  constructor({id, email, password, role, names, lastNames, phone, birthDate, country, photo, community }: {id: UserId, email: string, password: string, role: Array<string>, names: string, lastNames: string, phone: string, birthDate: Date, country: string, photo: string, community: string}) {
    super();

    this.ensurePasswordLength(password);

    this.id = id;
    this.email = email;
    this.password = password;
    this.role = role;
    this.names = names;
    this.lastNames = lastNames;
    this.phone = phone;
    this.birthDate = birthDate;
    this.country = country;
    this.photo = photo;
    this.community = community;
  }

  private ensurePasswordLength(password: string): void {
    if (password.length < 6) {
      throw new InvalidArgumentError(`Password must be at least 6 characters`);
    }
  }

  public static fromPrimitives(planData: {id: string, email: string, password: string, names: string, lastNames: string, phone: string, birthDate: Date, role: Array<string>, country: string, photo: string, community: string}): User {
    return new User({
      id: new UserId(planData.id),
      email: planData.email,
      password: planData.password,
      role: planData.role,
      names: planData.names,
      lastNames: planData.lastNames,
      phone: planData.phone,
      birthDate: planData.birthDate,
      country: planData.country,
      photo: planData.photo,
      community: planData.community
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
      country: this.country,
      photo: this.photo,
      community: this.community
    };
  }

  public updateRoleByApplicationForMonitoringStatus(status: string): void {
    if (status === applicationForMonitoringStatusList.APPROVED) {
      this.role.push(Roles.MONITOR);
    } else if (status === applicationForMonitoringStatusList.REJECTED) {
      this.role = this.role.filter(role => role !== Roles.MONITOR);
    }
  }
}
