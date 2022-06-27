import { nanoid } from 'nanoid';

import { Button, Input } from 'components';
import { IFormProps } from 'interfaces';
import { ButtonThemes } from 'types/enums';

import styles from './Form.module.scss';

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
      <div className={styles.grid}>
        <div className={styles.cell}>
          <Input
            id={`new-serivce-name-${nanoid()}`}
            label="Name"
            value={name}
            onChange={handleChangeName}
          />
        </div>
        <div className={styles.cell}>
          <Input
            id={`new-serivce-username-${nanoid()}`}
            label="Username"
            value={username}
            onChange={handleChangeUsername}
          />
        </div>
        <div className={styles.cell}>
          <Input
            id={`new-serivce-password-${nanoid()}`}
            label="Password"
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        <div className={styles.cell}>
          <Input
            id={`new-serivce-email-${nanoid()}`}
            label="Email"
            value={email}
            onChange={handleChangeEmail}
          />
        </div>
      </div>
      <Button
        theme={ButtonThemes.GRADIENT}
        onClick={handleClickCreate}
      >
        Create
      </Button>
    </div>
  );
}
