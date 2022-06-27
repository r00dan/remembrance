
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateUserInput {
    id: string;
    username: string;
    email: string;
    password: string;
    secureCode: string;
}

export interface LoginUserInput {
    email: string;
    password: string;
}

export interface User {
    id: string;
    email: string;
    username: string;
    password: string;
    secureCode: string;
    services?: Nullable<Nullable<Service>[]>;
}

export interface Service {
    id: string;
    name: string;
    username: string;
    email: string;
    password: string;
    phoneNumber: string;
    twofactor: boolean;
    creationTime: Date;
    updateTime: Date;
    user: User;
}

export interface AuthUser {
    jwt: string;
    user: User;
}

export interface IQuery {
    hello(): string | Promise<string>;
    getAllUsers(): Nullable<User[]> | Promise<Nullable<User[]>>;
    getCurrentUserInfo(email?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
    loginUser(loginUserInput: LoginUserInput): Nullable<AuthUser> | Promise<Nullable<AuthUser>>;
}

export interface IMutation {
    createUser(createUserInput: CreateUserInput): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
