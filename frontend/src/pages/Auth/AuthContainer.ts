/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, createElement, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
// import { useMutation } from '@apollo/client';

import {
  authorizedUserUsernameState,
  authorizedUserEmailState,
  authorizedUserTokenState,
} from 'store/atoms';
import { Routes } from 'types/enums';
import { Auth } from './Auth';

export function AuthContainer() {
  const navigate = useNavigate();

  const [username, setUsername] = useRecoilState(authorizedUserUsernameState);
  const [email, setEmail] = useRecoilState(authorizedUserEmailState);
  const [token, setToken] = useRecoilState(authorizedUserTokenState);

  const [signUpError, setSignUpError] = useState<string | null>(null);
  const [signInError, setSignInError] = useState<string | null>(null);
  const [signUpConfig, setSignUpConfig] = useState<any>({ email: '', username: '', password: '' });
  const [signInConfig, setSignInConfig] = useState<any>({ identifier: '', password: '' });

  // const [
  //   signUp,
  //   {
  //     data: signUpData,
  //     loading: isSignUpLoading,
  //   },
  // ] = useMutation<UsersPermissionsLoginPayload, UsersPermissionsRegisterInput>(SIGNUP);

  // const [
  //   signIn,
  //   {
  //     data: signInData,
  //     loading: isSignInLoading,
  //   },
  // ] = useMutation<{ register: UsersPermissionsLoginPayload }, { input: UsersPermissionsLoginInput }>(SIGNIN);

  function handleSignUpEmailChange({ target: { value } }: ChangeEvent<HTMLInputElement>): void {
    setSignUpConfig((prevState: any) => ({
      ...prevState,
      email: value,
    }));
  }

  function handleSignUpUsernameChange({ target: { value } }: ChangeEvent<HTMLInputElement>): void {
    setSignUpConfig((prevState: any) => ({
      ...prevState,
      username: value,
    }));
  }

  function handleSignUpPasswordChange({ target: { value } }: ChangeEvent<HTMLInputElement>): void {
    setSignUpConfig((prevState: any) => ({
      ...prevState,
      password: value,
    }));
  }

  function handleSignInIdentifierChange({ target: { value } }: ChangeEvent<HTMLInputElement>): void {
    setSignInConfig((prevState: any) => ({
      ...prevState,
      identifier: value,
    }));
  }

  function handleSignInPasswordChange({ target: { value } }: ChangeEvent<HTMLInputElement>): void {
    setSignInConfig((prevState: any) => ({
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

  function onSuccesAuth(response: any): void {
    const {
      jwt,
      user: {
        email,
        username,
      },
    } = response;

    window.localStorage.setItem('auth_token', jwt!);
    setToken(jwt!);
    setUsername(username);
    setEmail(email!);
    navigate(Routes.MAIN, { replace: true });
    window.open('/', '_self'); // TODO: redirect to main page
  }

  async function handleSignUpClick(): Promise<void> {
    const isValid = areSignUpFieldsValid();
    onSuccesAuth({});
  }

  async function handleSignInClick(): Promise<void> {
    const isValid = areSignInFieldsValid();
    onSuccesAuth({});
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
  });
}
