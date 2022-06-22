import { ChangeEvent, createElement, useState } from 'react';

import { Auth } from './Auth';
import { ISignUpConfig, IAuthProps, ISignInConfig } from './types';

export function AuthContainer() {
  const [signUpConfig, setSignUpConfig] = useState<ISignUpConfig>({ email: '', username: '', password: '' });
  const [signInConfig, setSignInConfig] = useState<ISignInConfig>({ username: '', password: '' });

  function handleSignUpEmailChange({ target: { value } }: ChangeEvent<HTMLInputElement>): void {
    setSignUpConfig((prevState) => ({
      ...prevState,
      email: value,
    }));
  }

  function handleSignUpUsernameChange({ target: { value } }: ChangeEvent<HTMLInputElement>): void {
    setSignUpConfig((prevState) => ({
      ...prevState,
      username: value,
    }));
  }

  function handleSignUpPasswordChange({ target: { value } }: ChangeEvent<HTMLInputElement>): void {
    setSignUpConfig((prevState) => ({
      ...prevState,
      password: value,
    }));
  }

  function handleSignInUsernameChange({ target: { value } }: ChangeEvent<HTMLInputElement>): void {
    setSignInConfig((prevState) => ({
      ...prevState,
      username: value,
    }));
  }

  function handleSignInPasswordChange({ target: { value } }: ChangeEvent<HTMLInputElement>): void {
    setSignInConfig((prevState) => ({
      ...prevState,
      password: value,
    }));
  }

  return createElement(Auth, {
    signUpConfig,
    signInConfig,
    onSignUpEmailChange: handleSignUpEmailChange,
    onSignUpUsernameChange: handleSignUpUsernameChange,
    onSignUpPasswordChange: handleSignUpPasswordChange,
    onSignInUsernameChange: handleSignInUsernameChange,
    onSignInPasswordChange: handleSignInPasswordChange,
  } as IAuthProps);
}
