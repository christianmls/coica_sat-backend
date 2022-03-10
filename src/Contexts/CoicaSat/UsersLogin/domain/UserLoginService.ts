import {UserLogged} from "./UserLogged";

export interface UserLoginService {
  login({email, password}: { email: string; password: string }): Promise<UserLogged>;
}
