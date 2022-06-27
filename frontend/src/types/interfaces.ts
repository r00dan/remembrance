/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, ChangeEventHandler, ReactNode } from 'react';

import { ButtonThemes } from 'enums';

export interface IService {
  name: string;
  username: string;
  email: string;
  password: string;
  icon?: string;
}

export interface IAuthorizedUser {
  username: string;
  token: string;
  services: string[];
}

export interface IBlockProps {
  children: ReactNode;
}

export interface IButtonProps {
  children: ReactNode;
  theme?: ButtonThemes;
  className?: string;
  onClick: () => void;
}

export interface IInputProps {
  id: string;
  value: string;
  label?: string;
  isPassword?: boolean;
  disabled?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
}

export interface ILayoutProps {
  children: ReactNode;
}

export interface ISeparatorProps {
  width?: number;
  shadowed?: boolean;
}

export interface IToastProps {
  value: string;
  isVisible: boolean;
}

export interface IMainProps {
  services: IService[];
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

export interface IAddNewServiceProps {
  collapsed: boolean;
  handleCollapse: () => void;
}

export interface IFormProps {
  name: string;
  username: string;
  password: string;
  email: string;
  handleChangeName: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeUsername: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  handleClickCreate: () => void;
}

export interface IListItemProps {
  children: React.ReactNode;
  className?: string;
}

export interface IServiceProps {
  name: string;
  username: string;
  email: string;
  password: string;
  icon: string;
  collapsed: boolean;
  editMode: boolean;
  handleCollapse: () => void;
  handleEditMode: () => void;
  hadleInputClick: (event: React.MouseEvent<HTMLInputElement>) => void;
}

export interface IServiceListProps {
  data: IService[];
}
