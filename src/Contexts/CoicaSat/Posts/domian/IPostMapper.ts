import {PostDTO} from './dtos/PostDTO';
import {Post} from './Post';

export interface IPostMapper {
  transformList(posts: Post[]): PostDTO[];
  transformToDTO(post: Post): PostDTO;
}
