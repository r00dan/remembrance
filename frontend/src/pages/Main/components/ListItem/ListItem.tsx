import classnames from 'classnames';
import styles from './ListItem.module.scss';

interface IListItemProps {
  children: React.ReactNode;
  className?: string;
}

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
