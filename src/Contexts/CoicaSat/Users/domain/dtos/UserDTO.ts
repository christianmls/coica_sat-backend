export class UserDTO {
  public id: string;
  public email: string;
  public names: string;
  public lastNames: string;
  public phone: string;
  public birthDate: Date;
  public role: string;

  constructor(id: string, email: string, names: string, lastNames: string, phone: string,  birthDate: Date, role: string) {
    this.id = id;
    this.email = email;
    this.names = names;
    this.lastNames = lastNames;
    this.phone = phone;
    this.birthDate = birthDate;
    this.role = role;
  }
}
