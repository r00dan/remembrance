import {
  Layout,
  Block,
  Button,
} from '../../components';
import { Themes } from '../../components/Button/types';

import styles from './Main.module.scss';

export function Main() {
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
