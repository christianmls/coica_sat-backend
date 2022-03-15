import {PostRepository} from '../domian/PostRepository';
import {Post} from '../domian/Post';
import {CreatePostRequest} from './CreatePostRequest';

export class PostCreator {
  private repository: PostRepository;

  constructor(repository: PostRepository) {
    this.repository = repository;
  }

  async run(request: CreatePostRequest): Promise<void> {
    const post = Post.fromPrimitives({
      id: request.id,
      description: request.description,
      images: request.images,
      userCreatorId: request.userCreatorId,
    });
    return this.repository.save(post);
  }
}
