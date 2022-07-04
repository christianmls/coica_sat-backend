import {Nullable} from '../../../Shared/domain/Nullable';
import {Post} from './Post';
import {PostId} from '../../Shared/domain/Posts/PostId';


export interface PostRepository {
  save(post: Post): Promise<void>;
  searchAll(): Promise<Array<Post>>;
  searchAllPaginated(query: object, pagination: { pageNumber: number, nPerPage: number }): Promise<Array<Post>>;
  searchById(id: PostId): Promise<Nullable<Post>>;
  delete(id: PostId): Promise<void>;
  count(query: object): Promise<number>;
}
