import { ChangeEvent } from 'react';

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
