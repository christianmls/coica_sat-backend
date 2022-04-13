import {PostRepository} from '../domian/PostRepository';
import {PostId} from '../../Shared/domain/Posts/PostId';

export class PostRemover {
  private repository: PostRepository;

  constructor(repository: PostRepository) {
    this.repository = repository;
  }

  async run(id: string): Promise<void> {
    return this.repository.delete(new PostId(id));
  }
}
