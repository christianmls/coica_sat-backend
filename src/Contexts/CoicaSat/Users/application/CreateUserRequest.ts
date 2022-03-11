export type CreateUserRequest = {
  id: string;
  email: string;
  password: string;
  role: string;
  names: string;
  lastNames: string;
  birthDate: Date;
};
