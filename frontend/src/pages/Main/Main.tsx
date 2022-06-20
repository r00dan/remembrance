import { useEffect } from 'react';
import { getServices } from '../../api/services';
import { getUsers } from '../../api/users';
import {
  Layout,
  Block,
  Button,
} from '../../components';
import { Themes } from '../../components/Button/types';

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
      <Button theme={Themes.PRIMARY}>Кнопка</Button>
    </Layout>
  );
}
