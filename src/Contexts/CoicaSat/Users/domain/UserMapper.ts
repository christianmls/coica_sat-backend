import {User} from './User';
import {UserDTO} from './dtos/UserDTO';

export interface IUserMapper {
  transformList(users: User[]): UserDTO[];
  transformToDTO(user: User): UserDTO;
  transformToDomain(userDTO: UserDTO): User;
}
