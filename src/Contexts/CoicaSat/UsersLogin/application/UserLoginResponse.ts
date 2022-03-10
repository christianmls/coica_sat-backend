export class UserLoginResponse {
  public readonly token: string;
  constructor(token: string) {
    this.token = token;
  }
}
