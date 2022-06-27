import classnames from 'classnames';

import { IListItemProps } from 'interfaces';

import styles from './ListItem.module.scss';

export function ListItem({
  children,
  className,
}: IListItemProps) {
  return (
    <div
      className={classnames([
        styles.root,
        !!className && className,
      ])}
    >
      {children}
    </div>
  );
}
