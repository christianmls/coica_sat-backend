import {User} from '../../Users/domain/User';

export class UserLoginResponse {
  public readonly token: string;
  public readonly user: any;

  constructor(token: string, user: User) {
    this.token = token;
    const { password, ...userWithoutPassword } = user.toPrimitives();
    this.user = userWithoutPassword;
  }
}
