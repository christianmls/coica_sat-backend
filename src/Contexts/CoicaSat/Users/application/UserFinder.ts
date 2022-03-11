import {UserRepository} from '../domain/UserRepository';
import {IUserMapper} from '../domain/UserMapper';
import {UserDTO} from '../domain/dtos/UserDTO';

export class UserFinder {
  private repository: UserRepository;
  private iUserMapper: IUserMapper;

  constructor(repository: UserRepository, roleMapper: IUserMapper) {
    this.repository = repository;
    this.iUserMapper =  roleMapper;
  }

  async run(): Promise<Array<UserDTO>> {
    const users = await this.repository.searchAll();
    return this.iUserMapper.transformList(users);
  }
}
