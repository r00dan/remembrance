import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type AuthUser = {
  __typename?: 'AuthUser';
  jwt: Scalars['String'];
  user: User;
};

export type CreateServiceInput = {
  email: Scalars['String'];
  icon?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  twofactor?: InputMaybe<Scalars['Boolean']>;
  username?: InputMaybe<Scalars['String']>;
};

export type CreateUserInput = {
  email: Scalars['String'];
  id: Scalars['String'];
  password: Scalars['String'];
  secureCode: Scalars['String'];
  username: Scalars['String'];
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createService?: Maybe<Service>;
  createUser?: Maybe<User>;
  removeService?: Maybe<Service>;
};


export type MutationCreateServiceArgs = {
  createServiceInput: CreateServiceInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationRemoveServiceArgs = {
  id?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getAllUsers?: Maybe<Array<User>>;
  getCurrentUserInfo?: Maybe<User>;
  getService?: Maybe<Service>;
  getServices?: Maybe<Array<Maybe<Service>>>;
  hello: Scalars['String'];
  loginUser?: Maybe<AuthUser>;
};


export type QueryGetCurrentUserInfoArgs = {
  email?: InputMaybe<Scalars['String']>;
};


export type QueryGetServiceArgs = {
  id: Scalars['String'];
};


export type QueryLoginUserArgs = {
  loginUserInput: LoginUserInput;
};

export type Service = {
  __typename?: 'Service';
  creationTime?: Maybe<Scalars['Date']>;
  email: Scalars['String'];
  icon?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  twofactor?: Maybe<Scalars['Boolean']>;
  username?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['String'];
  password: Scalars['String'];
  secureCode: Scalars['String'];
  services?: Maybe<Array<Maybe<Service>>>;
  username: Scalars['String'];
};
