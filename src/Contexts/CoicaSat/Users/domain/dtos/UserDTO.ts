export class UserDTO {
  public id: string;
  public email: string;
  public password: string;
  public names: string;
  public lastNames: string;
  public birthDate: Date;
  public role: string;

  constructor(id: string, email: string, password: string,   names: string, lastNames: string, birthDate: Date, role: string) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.names = names;
    this.lastNames = lastNames;
    this.birthDate = birthDate;
    this.role = role;
  }
}
