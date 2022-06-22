import { useEffect } from 'react';
import { getServices } from '../../api/services';
import { getUsers } from '../../api/users';
import {
  Layout,
  Block,
} from '../../components';

import styles from './Main.module.scss';

export function Main() {
  useEffect(() => {
    getServices();
    getUsers();
  }, []);
  return (
    <Layout>
      <div className={styles.root}>
        <Block>Форма создания сервиса</Block>
        <Block>Список сервисов</Block>
      </div>
    </Layout>
  );
}
