import {UserLoginRequest} from "./UserLoginRequest";
import {UserLoginResponse} from "./UserLoginResponse";
import {UserLoginService} from "../domain/UserLoginService";


export class UserAuthenticator {
  private userLoginService: UserLoginService;

  constructor(loginService: UserLoginService) {
    this.userLoginService = loginService;
  }

  async run(request: UserLoginRequest): Promise<UserLoginResponse> {
    const userLogged =  await this.userLoginService.login({
      email: request.email,
      password: request.password
    });

    return new UserLoginResponse(userLogged.token);
  }
}
