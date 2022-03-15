import {PostRepository} from '../domian/PostRepository';
import {IPostMapper} from '../domian/IPostMapper';
import {PostDTO} from '../domian/dtos/PostDTO';

export class PostFinder {
  private repository: PostRepository;
  private iPostMapper: IPostMapper;

  constructor(repository: PostRepository, roleMapper: IPostMapper) {
    this.repository = repository;
    this.iPostMapper =  roleMapper;
  }

  async run(): Promise<Array<PostDTO>> {
    const users = await this.repository.searchAll();
    return this.iPostMapper.transformList(users);
  }
}
