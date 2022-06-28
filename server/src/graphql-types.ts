
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateServiceInput {
    id: string;
    name: string;
    password: string;
    email: string;
    username?: Nullable<string>;
    phoneNumber?: Nullable<string>;
    icon?: Nullable<string>;
}

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

export interface Service {
    id: string;
    name: string;
    password: string;
    email: string;
    username?: Nullable<string>;
    phoneNumber?: Nullable<string>;
    icon?: Nullable<string>;
    twofactor?: Nullable<boolean>;
    creationTime?: Nullable<Date>;
}

export interface User {
    id: string;
    email: string;
    username: string;
    password: string;
    secureCode: string;
    services?: Nullable<Nullable<Service>[]>;
}

export interface AuthUser {
    jwt: string;
    user: User;
}

export interface IQuery {
    hello(): string | Promise<string>;
    getService(id: string): Nullable<Service> | Promise<Nullable<Service>>;
    getServices(): Nullable<Nullable<Service>[]> | Promise<Nullable<Nullable<Service>[]>>;
    getAllUsers(): Nullable<User[]> | Promise<Nullable<User[]>>;
    getCurrentUserInfo(email?: Nullable<string>): Nullable<User> | Promise<Nullable<User>>;
    loginUser(loginUserInput: LoginUserInput): Nullable<AuthUser> | Promise<Nullable<AuthUser>>;
}

export interface IMutation {
    createService(createServiceInput: CreateServiceInput): Nullable<Service> | Promise<Nullable<Service>>;
    createUser(createUserInput: CreateUserInput): Nullable<User> | Promise<Nullable<User>>;
    removeService(id?: Nullable<string>): Nullable<Service> | Promise<Nullable<Service>>;
}

type Nullable<T> = T | null;
