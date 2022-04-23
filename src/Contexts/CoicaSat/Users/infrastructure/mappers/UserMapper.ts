import {IUserMapper} from '../../domain/UserMapper';
import {UserDTO} from '../../domain/dtos/UserDTO';
import {User} from '../../domain/User';

export class UserMapper implements  IUserMapper {
  constructor() {}

  public transformList(users: User[]): UserDTO[] {
    return users.map(user => this.transformToDTO(user));
  }

  public transformToDTO(user: User): UserDTO {
    return new UserDTO(user.id.value, user.email, user.names, user.lastNames, user.phone,  user.birthDate, user.role, user.country);
  }
}
