import { ILayoutProps } from 'interfaces';
import { Header } from './components/Header/Header';

import styles from './Layout.module.scss';

export function Layout({
  children,
}: ILayoutProps) {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.body}>
        {children}
      </div>
    </div>
  );
}
