import styles from './Separator.module.scss';
import { ISeparatorProps } from './types';

export function Separator({
  width = 100,
}: ISeparatorProps) {
  return (
    <div
      className={styles.root}
      style={{ width: `${width}%` }}
    />
  );
}
