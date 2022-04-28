export type CreateUserRequest = {
  id: string;
  email: string;
  password: string;
  role: Array<string>;
  names: string;
  lastNames: string;
  phone: string;
  birthDate: Date;
  country: string;
  photo: string;
  community: string;
};
