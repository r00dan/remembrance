import { ChangeEvent } from 'react';
import { ISignInParams, ISignUpParams } from '../../api/auth';

export interface ISignUpConfig extends ISignUpParams {}
export interface ISignInConfig extends ISignInParams { }
export interface IAuthorizedUser {
  username: string;
  token: string;
  services: string[];
}

export interface IAuthProps {
  signUpConfig: ISignUpConfig;
  signInConfig: ISignInConfig;
  signUpError: string | null;
  signInError: string | null;
  onSignUpEmailChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSignUpUsernameChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSignUpPasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSignInIdentifierChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSignInPasswordChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSignUpClick: () => void;
  onSignInClick: () => void;
}
