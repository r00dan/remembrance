import classnames from 'classnames';
import { nanoid } from 'nanoid';
import React from 'react';

import { ChevronIcon } from '../../../../assets/svg';
import { Button, ButtonThemes, Input } from '../../../../components';
import { ListItem } from '../ListItem/ListItem';

import styles from './Service.module.scss';

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
        <div className={styles.shortInfo} onClick={handleCollapse}>
          <div className={styles.baseInfo}>
            <div className={styles.icon}>{icon}</div>
            <div className={styles.serviceName}>{name}</div>
            <div className={styles.identifier}>{username || email}</div>
          </div>
          <ChevronIcon
            className={classnames([
              styles.displayButton,
              !collapsed && styles.displayButton__reverted,
            ])}
          />
        </div>
        <div className={styles.fullInfo}>
          {!collapsed && (
            <>
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
              <div className={styles.actionButtons}>
                <Button theme={ButtonThemes.GRADIENT} className={styles.editButton} onClick={handleEditMode}>{editMode ? 'Close' : 'Edit'}</Button>
                {editMode && (
                <div className={styles.serviceControlButtons}>
                  <Button theme={ButtonThemes.PRIMARY} onClick={() => {}}>Save</Button>
                  <Button theme={ButtonThemes.SECONDARY} onClick={() => {}}>Remove</Button>
                </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </ListItem>
  );
}
