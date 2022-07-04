import {UserRepository} from '../domain/UserRepository';
import {IUserMapper} from '../domain/UserMapper';
import {PaginateItemsResponse} from '../../Shared/application/PaginateItemsResponse';

export class UserFinder {
  private repository: UserRepository;
  private iUserMapper: IUserMapper;

  constructor(repository: UserRepository, roleMapper: IUserMapper) {
    this.repository = repository;
    this.iUserMapper =  roleMapper;
  }

  async run({ pageNumber, nPerPage }: { pageNumber: number, nPerPage: number }) {
    const totalUsers = await this.repository.count({ deleted: false });
    const users = await this.repository.searchAllPaginated({ deleted: false }, { pageNumber, nPerPage });
    const usersPrimitives = this.iUserMapper.transformList(users);
    return new PaginateItemsResponse(usersPrimitives, totalUsers, nPerPage, pageNumber);
  }
}
