import {PostRepository} from '../domian/PostRepository';
import {IPostMapper} from '../domian/IPostMapper';
import {PaginateItemsResponse} from '../../Shared/application/PaginateItemsResponse';

export class PostFinder {
  private repository: PostRepository;
  private iPostMapper: IPostMapper;

  constructor(repository: PostRepository, roleMapper: IPostMapper) {
    this.repository = repository;
    this.iPostMapper =  roleMapper;
  }

  async run({ pageNumber, nPerPage }: { pageNumber: number, nPerPage: number }) {
    const totalPosts = await this.repository.count();
    const posts = await this.repository.searchAllPaginated({pageNumber, nPerPage});
    const postsPrimitives = this.iPostMapper.transformList(posts);
    return new PaginateItemsResponse(postsPrimitives, totalPosts, nPerPage, pageNumber);
  }
}
