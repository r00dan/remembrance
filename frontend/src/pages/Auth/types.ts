/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent } from 'react';

export interface IAuthorizedUser {
  username: string;
  token: string;
  services: string[];
}

export interface IAuthProps {
  signUpConfig: any;
  signInConfig: any;
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
