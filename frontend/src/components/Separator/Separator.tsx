import classnames from 'classnames';

import { ISeparatorProps } from 'interfaces';

import styles from './Separator.module.scss';

export function Separator({
  width = 100,
  shadowed = false,
}: ISeparatorProps) {
  return (
    <div
      className={classnames([
        styles.root,
        shadowed && styles.shadowed,
      ])}
      style={{ width: `${width}%` }}
    />
  );
}
