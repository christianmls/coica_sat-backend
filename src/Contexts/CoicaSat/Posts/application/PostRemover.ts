import {PostRepository} from '../domian/PostRepository';
import {PostId} from '../../Shared/domain/Posts/PostId';

export class PostRemover {
  private repository: PostRepository;

  constructor(repository: PostRepository) {
    this.repository = repository;
  }

  async run(id: string): Promise<void> {
    const post = await this.repository.searchById(new PostId(id));
    if (!post) {
      throw new Error(`Documento con id ${ id } no existe`);
    }
    post.deleted = true;
    return this.repository.save(post);
  }
}
