import classnames from 'classnames';

import { IButtonProps, Themes } from './types';

import styles from './Button.module.scss';

export function Button({
  theme = Themes.PRIMARY,
  children,
  className,
  onClick,
}: IButtonProps) {
  return (
    <div
      className={styles.root}
      onClick={onClick}
    >
      <button className={classnames([
        styles.button,
        styles[theme],
        !!className && className,
      ])}
      >
        {children}
      </button>
    </div>
  );
}
