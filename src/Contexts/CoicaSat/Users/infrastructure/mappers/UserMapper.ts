import {IUserMapper} from '../../domain/UserMapper';
import {UserDTO} from '../../domain/dtos/UserDTO';
import {User} from '../../domain/User';

export class UserMapper implements  IUserMapper {
  constructor() {}

  public transformList(roles: User[]): UserDTO[] {
    return roles.map(role => this.transformToDTO(role));
  }

  public transformToDTO(role: User): UserDTO {
    return new UserDTO(role.id.value, role.email, role.names, role.lastNames, role.phone,  role.birthDate, role.role);
  }
}
