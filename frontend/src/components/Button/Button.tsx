import classnames from 'classnames';

import { IButtonProps } from 'interfaces';
import { ButtonThemes } from '../../types/enums';

import styles from './Button.module.scss';

export function Button({
  theme = ButtonThemes.PRIMARY,
  children,
  className,
  onClick,
}: IButtonProps) {
  return (
    <div
      className={classnames([
        styles.root,
        !!className && className,
      ])}
      onClick={onClick}
    >
      <button className={classnames([
        styles.button,
        styles[theme],
      ])}
      >
        {children}
      </button>
    </div>
  );
}
