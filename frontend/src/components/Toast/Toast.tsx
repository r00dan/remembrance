import classnames from 'classnames';

import { IToastProps } from './types';

import styles from './Toast.module.scss';

export function Toast({
  value,
  isVisible,
}: IToastProps) {
  return isVisible ? (
    <div className={classnames([
      styles.root,
      isVisible && styles.root__visible,
    ])}
    >
      {value}
    </div>
  ) : null;
}
