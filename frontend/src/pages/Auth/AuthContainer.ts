import { ChangeEvent, createElement, useState } from 'react';

import { ISignUpConfig, IAuthProps, ISignInConfig } from './types';
import { Auth } from './Auth';
import { signIn, signUp } from '../../api/auth';
import { getError, Errors } from '../../utils/errors';
import { useAuth } from '../../hooks/useAuth';

export function AuthContainer() {
  const { setJwtToken } = useAuth();
  const [signUpError, setSignUpError] = useState<string | null>(null);
  const [signInError, setSignInError] = useState<string | null>(null);
  const [signUpConfig, setSignUpConfig] = useState<ISignUpConfig>({ email: '', username: '', password: '' });
  const [signInConfig, setSignInConfig] = useState<ISignInConfig>({ identifier: '', password: '' });

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

  function handleSignInIdentifierChange({ target: { value } }: ChangeEvent<HTMLInputElement>): void {
    setSignInConfig((prevState) => ({
      ...prevState,
      identifier: value,
    }));
  }

  function handleSignInPasswordChange({ target: { value } }: ChangeEvent<HTMLInputElement>): void {
    setSignInConfig((prevState) => ({
      ...prevState,
      password: value,
    }));
  }

  function areSignUpFieldsValid(): boolean {
    const { username, email, password } = signUpConfig;
    return !!username.trim() && !!email.trim() && !!password.trim();
  }

  function areSignInFieldsValid(): boolean {
    const { identifier, password } = signInConfig;
    return !!identifier.trim() && !!password.trim();
  }

  async function handleSignUpClick(): Promise<void> {
    const isValid = areSignUpFieldsValid();

    if (isValid) {
      setSignUpError(null);
      const response = await signUp(signUpConfig);
      if (response.jwt) {
        setJwtToken(response.jwt);
      } else {
        setSignUpError(getError(Errors.UNKNOWN, response.error.message));
      }
    } else {
      setSignUpError(getError(Errors.AUTH_CREDENTIALS));
    }
  }

  async function handleSignInClick(): Promise<void> {
    const isValid = areSignInFieldsValid();

    if (isValid) {
      setSignInError(null);
      const response = await signIn(signInConfig);

      if (response.jwt) {
        setJwtToken(response.jwt);
      } else {
        setSignInError(getError(Errors.UNKNOWN, response.error.message));
      }
    } else {
      setSignInError(getError(Errors.AUTH_CREDENTIALS));
    }
  }

  return createElement(Auth, {
    signUpConfig,
    signInConfig,
    signUpError,
    signInError,
    onSignUpEmailChange: handleSignUpEmailChange,
    onSignUpUsernameChange: handleSignUpUsernameChange,
    onSignUpPasswordChange: handleSignUpPasswordChange,
    onSignInIdentifierChange: handleSignInIdentifierChange,
    onSignInPasswordChange: handleSignInPasswordChange,
    onSignUpClick: handleSignUpClick,
    onSignInClick: handleSignInClick,
  } as IAuthProps);
}
