import { nanoid } from 'nanoid';

import { Button, Input, Checkbox } from 'components';
import { IFormProps } from 'interfaces';
import { ButtonThemes } from 'types/enums';

import styles from './Form.module.scss';

export function Form({
  name,
  username,
  password,
  email,
  phone,
  newServiceLoading,
  handleChangeName,
  handleChangeUsername,
  handleChangePassword,
  handleChangeEmail,
  handleClickCreate,
  handleChangePhone,
  handleChangeTwofactor,
}: IFormProps) {
  return (
    <div className={styles.root}>
      <div className={styles.grid}>
        <div className={styles.cell}>
          <Input
            id={`new-serivce-name-${nanoid()}`}
            label="Name*"
            value={name}
            onChange={handleChangeName}
          />
        </div>
        <div className={styles.cell}>
          <Input
            id={`new-serivce-password-${nanoid()}`}
            label="Password*"
            value={password}
            onChange={handleChangePassword}
          />
        </div>
        <div className={styles.cell}>
          <Input
            id={`new-serivce-email-${nanoid()}`}
            label="Email*"
            value={email}
            onChange={handleChangeEmail}
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
            id={`new-serivce-phoneNumber-${nanoid()}`}
            label="Phone"
            value={phone}
            onChange={handleChangePhone}
          />
        </div>
        <div className={styles.cell}>
          <Checkbox
            id={`new-serivce-phoneNumber-${nanoid()}`}
            label="Two factor"
            onChange={handleChangeTwofactor}
          />
        </div>
      </div>
      <Button
        theme={ButtonThemes.GRADIENT}
        onClick={handleClickCreate}
      >
        {newServiceLoading ? 'Updating' : 'Create'}
      </Button>
    </div>
  );
}
