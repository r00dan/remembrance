import { ListItem } from '../ListItem/ListItem';

import styles from './AddNewService.module.scss';

export function AddNewService() {
  return (
    <ListItem
      className={styles.root}
    >
      <div className={styles.addButton}>➕</div>
    </ListItem>
  );
}
