import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from '../Controller';
import {UserAuthenticator} from "../../../../../Contexts/CoicaSat/UsersLogin/application/UserAuthenticator";
import {UserLoginResponse} from "../../../../../Contexts/CoicaSat/UsersLogin/application/UserLoginResponse";

type LoginPostRequest = Request & {
  body: {
    email: string;
    password: string;
  };
};
export class LoginPostController implements Controller {
  constructor(private userLogin: UserAuthenticator) {}

  async run(req: LoginPostRequest, res: Response) {
    try {
      const { email, password } = req.body;
      const userLoginResponse: UserLoginResponse = await this.userLogin.run({ email, password });

      res.status(httpStatus.OK).send({
        token: userLoginResponse.token,
        user: userLoginResponse.user
      });
    }  catch (error) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: String(error)
      });
    }
  }
}
