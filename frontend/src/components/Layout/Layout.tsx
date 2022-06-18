import { ILayoutProps } from './types';

import { Header } from './components';

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
