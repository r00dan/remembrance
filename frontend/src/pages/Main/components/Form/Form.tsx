import { nanoid } from 'nanoid';
import { Button, ButtonThemes, Input } from '../../../../components';
import styles from './Form.module.scss';
import { IFormProps } from './types';

export function Form({
  name,
  username,
  password,
  email,
  handleChangeName,
  handleChangeUsername,
  handleChangePassword,
  handleChangeEmail,
  handleClickCreate,
}: IFormProps) {
  return (
    <div className={styles.root}>
      <Input
        id={`new-serivce-name-${nanoid()}`}
        label="Name"
        value={name}
        onChange={handleChangeName}
      />
      <Input
        id={`new-serivce-username-${nanoid()}`}
        label="Username"
        value={username}
        onChange={handleChangeUsername}
      />
      <Input
        id={`new-serivce-password-${nanoid()}`}
        label="Password"
        value={password}
        onChange={handleChangePassword}
      />
      <Input
        id={`new-serivce-email-${nanoid()}`}
        label="Email"
        value={email}
        onChange={handleChangeEmail}
      />
      <Button
        theme={ButtonThemes.GRADIENT}
        onClick={handleClickCreate}
      >
        Create
      </Button>
    </div>
  );
}
