import { ChangeEvent } from 'react';

export interface ISignUpConfig {
  username: string;
  email: string;
  password: string;
}

export interface ISignInConfig {
  username: string;
  password: string;
}

export interface IAuthProps {
  signUpConfig: ISignUpConfig;
  signInConfig: ISignInConfig;
  onSignUpEmailChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSignUpUsernameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSignUpPasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSignInUsernameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSignInPasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
