import classnames from 'classnames';

import { IButtonProps, Themes } from './types';

import styles from './Button.module.scss';

export function Button({
  theme = Themes.PRIMARY,
  children,
}: IButtonProps) {
  return (
    <div className={styles.root}>
      <button className={classnames([
        styles.button,
        theme === Themes.PRIMARY ? styles.primary : styles.secondary,
      ])}
      >
        {children}
      </button>
    </div>
  );
}
