import classnames from 'classnames';
import { nanoid } from 'nanoid';

import { ChevronIcon, PencilIcon } from 'assets/svg';
import { IServiceProps } from 'interfaces';
import { Button, Input } from 'components';
import { ButtonThemes } from 'types/enums';
import { ListItem } from '../ListItem/ListItem';

import styles from './Service.module.scss';

export function Service({
  name,
  username,
  email,
  password,
  icon,
  collapsed,
  editMode,
  handleCollapse,
  handleEditMode,
  hadleInputClick,
}: IServiceProps) {
  return (
    <ListItem>
      <div className={styles.root}>
        <div className={styles.shortInfo}>
          <div className={styles.baseInfo}>
            <div className={styles.icon}>{icon}</div>
            <div className={styles.serviceName}>{name}</div>
            <div className={styles.identifier}>{username || email}</div>
          </div>
          <div className={styles.actionButtons}>
            <PencilIcon
              className={styles.editButton}
              onClick={handleEditMode}
            />
            <ChevronIcon
              className={classnames([
                styles.displayButton,
                !collapsed && styles.displayButton__reverted,
              ])}
              onClick={handleCollapse}
            />
          </div>
        </div>
        {!collapsed && (
          <div className={styles.fullInfo}>
            <Input
              id={`service-username-${nanoid()}`}
              label="Username"
              value={username}
              disabled={!editMode}
              onClick={hadleInputClick}
              onChange={() => {}}
            />
            <Input
              id={`service-email-${nanoid()}`}
              label="Email"
              value={email}
              disabled={!editMode}
              onClick={hadleInputClick}
              onChange={() => {}}
            />
            <Input
              isPassword
              id={`service-password-${nanoid()}`}
              label="Password"
              value={password}
              disabled={!editMode}
              onClick={hadleInputClick}
              onChange={() => {}}
            />
            {editMode && (
              <div className={styles.serviceControlButtons}>
                <Button theme={ButtonThemes.PRIMARY} onClick={() => {}}>Undo</Button>
                <Button theme={ButtonThemes.GRADIENT} onClick={() => {}}>Save</Button>
                <Button theme={ButtonThemes.SECONDARY} onClick={() => {}}>Remove</Button>
              </div>
            )}
          </div>
        )}
      </div>
    </ListItem>
  );
}
