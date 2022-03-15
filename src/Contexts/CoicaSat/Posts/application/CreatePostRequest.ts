export type CreatePostRequest = {
  id: string;
  description: string;
  images: Array<string>;
  userCreatorId: string;
};
