export class PostDTO {
  public readonly id: string;
  public readonly description: string;
  public readonly images: Array<string>;
  public readonly userCreatorId: string;
  public readonly status: string;
  constructor(id: string, description: string, images: Array<string>, userCreatorId: string, status: string) {
    this.id = id;
    this.description = description;
    this.images = images;
    this.userCreatorId = userCreatorId;
    this.status = status;
  }
}
