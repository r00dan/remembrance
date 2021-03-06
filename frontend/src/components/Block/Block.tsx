import { IBlockProps } from 'interfaces';

import styles from './Block.module.scss';

export function Block({
  children,
}: IBlockProps) {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
}
