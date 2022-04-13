import {User} from '../../Users/domain/User';

export class UserLogged {
  public readonly  token: string;
  public readonly  user: User;

  constructor(token: string, user: User) {
    this.token = token;
    this.user = user;
  }
}
