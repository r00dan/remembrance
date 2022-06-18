import { IButtonProps } from "./types";

import styles from './Button.module.scss';

export function Button({
  children,
}: IButtonProps) {
  return (
    <div className={styles.root}>
      <button className={styles.button}>{children}</button>
    </div>
  );
}
