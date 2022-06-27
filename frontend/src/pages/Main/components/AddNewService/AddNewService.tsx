import classnames from 'classnames';

import { ListItem } from '../ListItem/ListItem';
import { IAddNewServiceProps } from './types';
import { Form } from '../index';

import styles from './AddNewService.module.scss';

export function AddNewService({
  collapsed,
  handleCollapse,
}: IAddNewServiceProps) {
  return (
    <ListItem
      className={styles.root}
    >
      <div
        className={classnames([
          styles.addButton,
          collapsed && styles.addButton__rotated,
        ])}
        onClick={handleCollapse}
      >
        ➕
      </div>
      {collapsed && (
        <Form />
      )}
    </ListItem>
  );
}
