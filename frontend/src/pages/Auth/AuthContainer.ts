/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, createElement, useState } from 'react';
import { useRecoilState } from 'recoil';

import {
  ISignUpConfig,
  IAuthProps,
  ISignInConfig,
} from './types';
import { Auth } from './Auth';
import { signIn, signUp } from '../../api/auth';
import { getError, Errors } from '../../utils/errors';
import {
  authorizedUserUsernameState,
  authorizedUserEmailState,
  authorizedUserTokenState,
} from '../../store/atoms';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export function AuthContainer() {
  const [username, setUsername] = useRecoilState(authorizedUserUsernameState);
  const [email, setEmail] = useRecoilState(authorizedUserEmailState);
  const [token, setToken] = useRecoilState(authorizedUserTokenState);

  const [signUpError, setSignUpError] = useState<string | null>(null);
  const [signInError, setSignInError] = useState<string | null>(null);
  const [signUpConfig, setSignUpConfig] = useState<ISignUpConfig>({ email: '', username: '', password: '' });
  const [signInConfig, setSignInConfig] = useState<ISignInConfig>({ identifier: '', password: '' });

  const { updateStoreItem } = useLocalStorage('auth_token');

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onSuccesAuth(response: any): void {
    const {
      jwt,
      user: {
        email,
        username,
      },
    } = response;

    updateStoreItem(jwt);
    setToken(jwt);
    setUsername(username);
    setEmail(email);
  }

  async function handleSignUpClick(): Promise<void> {
    const isValid = areSignUpFieldsValid();

    if (isValid) {
      setSignUpError(null);
      const response = await signUp(signUpConfig);
      if (response.jwt) {
        onSuccesAuth(response);
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
        onSuccesAuth(response);
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
