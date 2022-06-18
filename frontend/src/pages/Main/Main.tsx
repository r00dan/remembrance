import { Layout, Block } from '../../components';

import styles from './Main.module.scss';

export function Main() {
  return (
    <Layout>
      <div className={styles.root}>
        <Block>Форма создания сервиса</Block>
        <Block>Список сервисов</Block>
      </div>
    </Layout>
  );
}
