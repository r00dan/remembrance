import styles from './Header.module.scss';

export function Header() {
  return (
    <div className={styles.root}>
      <h2 className={styles.logo}>Remembrance</h2>
      <div className={styles.username}>{'{username}'}</div>
    </div>
  );
}
