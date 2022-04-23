export class UserDTO {
  public readonly id: string;
  public readonly email: string;
  public readonly names: string;
  public readonly lastNames: string;
  public readonly phone: string;
  public readonly birthDate: Date;
  public readonly role: Array<string>;
  public readonly country: string;

  constructor(id: string, email: string, names: string, lastNames: string, phone: string,  birthDate: Date, role: Array<string>, country: string) {
    this.id = id;
    this.email = email;
    this.names = names;
    this.lastNames = lastNames;
    this.phone = phone;
    this.birthDate = birthDate;
    this.role = role;
    this.country = country;
  }
}
