import {IPostMapper} from '../../domian/IPostMapper';
import {PostDTO} from '../../domian/dtos/PostDTO';
import {Post} from '../../domian/Post';

export class PostMapper implements  IPostMapper {
  constructor() {}

  public transformList(posts: Post[]): PostDTO[] {
    return posts.map(role => this.transformToDTO(role));
  }

  public transformToDTO(post: Post): PostDTO {
    return new PostDTO(post.id.value, post.description, post.images, post.userCreatorId.value, post.status);
  }
}
