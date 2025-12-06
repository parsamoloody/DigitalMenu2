// user
import { Timestamps, BaseEntity, AuthorSignature } from '../in-use/shared';

export interface UserProps extends Partial<BaseEntity>{
  email: string;
  password: string;
  name: string;
  avatar: string;
}

export interface UserCreateInput {
  email: string;
  password: string;
  name: string;
}

export interface UserLoginInput {
  email: string;
  password: string;
}

export interface UserLoginOutput {
  user: UserProps;
  token: string;
}