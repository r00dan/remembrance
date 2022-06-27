import { createElement, useState, ChangeEvent } from 'react';
import { Form } from './Form';

export function FormContainer() {
  const [name, setName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;
    setName(value);
  };
  const handleChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;
    setUsername(value);
  };
  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;
    setPassword(value);
  };
  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;
    setEmail(value);
  };
  const handleClickCreate = () => {
    console.log({
      name,
      username,
      password,
      email,
    });
  };
  return createElement(Form, {
    name,
    username,
    password,
    email,
    handleClickCreate,
    handleChangeName,
    handleChangeUsername,
    handleChangePassword,
    handleChangeEmail,
  });
}
