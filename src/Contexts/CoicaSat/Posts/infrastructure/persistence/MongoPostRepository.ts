import {MongoRepository} from '../../../../Shared/infrastructure/persistence/mongo/MongoRepository';
import {Nullable} from '../../../../Shared/domain/Nullable';
import {Post} from '../../domian/Post';
import {PostRepository} from '../../domian/PostRepository';
import {PostId} from '../../../Shared/domain/Posts/PostId';

export interface PostDocument {
  _id: string;
  description: string;
  images: Array<string>;
  userCreatorId: string;
}

export class MongoPostRepository extends MongoRepository<Post> implements PostRepository {
  async searchAll(): Promise<Array<Post>> {
    const posts = await this.findAll<PostDocument>();
    return posts?.map(post => Post.fromPrimitives({
      id: post._id,
      description: post.description,
      images: post.images,
      userCreatorId: post.userCreatorId,
    })) ?? [];
  }

  public save(post: Post): Promise<void> {
    return this.persist(post.id.value, post);
  }

  public delete(id: PostId): Promise<void> {
    return this.removeById(id.value);
  }

  public async searchById(id: PostId): Promise<Nullable<Post>> {
    const document = await this.findOne<PostDocument>( { _id: id.value });

    return document ? Post.fromPrimitives({
      id: document._id,
      description: document.description,
      images: document.images,
      userCreatorId: document.userCreatorId,
    }) : null;
  }

  protected collectionName(): string {
    return 'posts';
  }
}
