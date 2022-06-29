import {
  createElement,
  useState,
  ChangeEvent,
} from 'react';
import { useMutation } from '@apollo/client';
import { nanoid } from 'nanoid';
import { CREATE_SERVICE } from 'api';
import { Service, CreateServiceInput } from 'types.apollo';

// import { Service, CreateServiceInput } from 'types.apollo';
import { Form } from './Form';

export function FormContainer() {
  const [name, setName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [twofactor, setTwofactor] = useState<boolean>(false);

  const [createUser, { loading: newServiceLoading }] = useMutation<Service, CreateServiceInput>(CREATE_SERVICE);

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

  const handleChangePhone = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;
    setPhone(value);
  };

  const handleChangeTwofactor = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { checked: value } } = event;
    setTwofactor(value);
  };

  const validateRequiredFields = () => !!name.trim() && !!email.trim() && !!password.trim();

  const handleClickCreate = async () => {
    const areFieldsValid = validateRequiredFields();
    if (areFieldsValid) {
      await createUser({
        variables: {
          id: nanoid(),
          email,
          name,
          password,
        },
      });
    }
  };

  return createElement(Form, {
    name,
    username,
    password,
    email,
    phone,
    newServiceLoading,
    handleClickCreate,
    handleChangeName,
    handleChangeUsername,
    handleChangePassword,
    handleChangeEmail,
    handleChangePhone,
    handleChangeTwofactor,
  });
}
