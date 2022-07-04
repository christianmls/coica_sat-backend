import {AggregateRoot} from '../../../Shared/domain/AggregateRoot';
import {PostId} from '../../Shared/domain/Posts/PostId';
import {UserId} from '../../Shared/domain/Users/UserId';

export class Post extends AggregateRoot {

  public readonly id: PostId;
  public readonly description: string;
  public readonly images: Array<string>;
  public readonly userCreatorId: UserId;
  public deleted: boolean;

  constructor(id: PostId, description: string, images: Array<string>, userCreatorId: UserId, deleted: boolean) {
    super();
    this.id = id;
    this.description = description;
    this.images = images;
    this.userCreatorId = userCreatorId;
    this.deleted = deleted;
  }
  public static fromPrimitives(planData: {
    id: string, description: string, images: Array<string>, userCreatorId: string, deleted: boolean}): Post {
    return new Post(
      new PostId(planData.id),
      planData.description,
      planData.images,
      new UserId(planData.userCreatorId),
      planData.deleted)
  }
  toPrimitives(): any {
    return {
      id: this.id.value,
      description: this.description,
      images: this.images,
      userCreatorId: this.userCreatorId.value,
      deleted: this.deleted
    };
  }
  toDocument() {
    return {
      id: this.id.value,
      description: this.description,
      images: this.images,
      userCreatorId: this.userCreatorId.value
    };
  }
}
