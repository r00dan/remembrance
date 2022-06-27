import classnames from 'classnames';

import { PlusIcon } from 'assets/svg';
import { IAddNewServiceProps } from 'interfaces';
import { ListItem } from '../ListItem/ListItem';
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
        <PlusIcon />
      </div>
      {collapsed && (
        <Form />
      )}
    </ListItem>
  );
}
