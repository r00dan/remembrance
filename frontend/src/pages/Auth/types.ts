import { ChangeEvent } from 'react';
import { UsersPermissionsLoginInput, UsersPermissionsRegisterInput } from '../../apollo-types';

export interface IAuthorizedUser {
  username: string;
  token: string;
  services: string[];
}

export interface IAuthProps {
  signUpConfig: UsersPermissionsRegisterInput;
  signInConfig: UsersPermissionsLoginInput;
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
