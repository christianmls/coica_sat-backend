import {AggregateRoot} from '../../../Shared/domain/AggregateRoot';
import {PostId} from '../../Shared/domain/Posts/PostId';
import {UserId} from '../../Shared/domain/Users/UserId';

export class Post extends AggregateRoot {

  public readonly id: PostId;
  public readonly description: string;
  public readonly images: Array<string>;
  public readonly userCreatorId: UserId;

  constructor(id: PostId, description: string, images: Array<string>, userCreatorId: UserId) {
    super();
    this.id = id;
    this.description = description;
    this.images = images;
    this.userCreatorId = userCreatorId;
  }
  public static fromPrimitives(planData: {
    id: string, description: string, images: Array<string>, userCreatorId: string}): Post {
    return new Post(
      new PostId(planData.id),
      planData.description,
      planData.images,
      new UserId(planData.userCreatorId));
  }
  toPrimitives(): any {
    return {
      id: this.id.value,
      description: this.description,
      images: this.images,
      userCreatorId: this.userCreatorId.value
    };
  }
}
