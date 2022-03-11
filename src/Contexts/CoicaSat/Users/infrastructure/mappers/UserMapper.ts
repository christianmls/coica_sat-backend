import {IUserMapper} from '../../domain/UserMapper';
import {UserDTO} from '../../domain/dtos/UserDTO';
import {User} from '../../domain/User';

export class UserMapper implements  IUserMapper {
  constructor() {}

  public transformList(roles: User[]): UserDTO[] {
    return roles.map(role => this.transformToDTO(role));
  }

  public transformToDTO(role: User): UserDTO {
    return new UserDTO(role.id.value, role.email, role.password, role.names, role.lastNames, role.birthDate, role.role);
  }

  public transformToDomain(userDTO: UserDTO): User {
    return User.fromPrimitives({
      id: userDTO.id,
      email: userDTO.email,
      password: userDTO.password,
      names: userDTO.names,
      lastNames: userDTO.lastNames,
      birthDate: userDTO.birthDate,
      role: userDTO.role
    });
  }
}
