import { useRecoilState } from 'recoil';

import { authorizedUserUsernameState } from 'store/atoms';

import styles from './Header.module.scss';

export function Header() {
  const [username] = useRecoilState(authorizedUserUsernameState);
  return (
    <div className={styles.root}>
      <h2 className={styles.logo}>Remembrance</h2>
      <div className={styles.username}>{username}</div>
    </div>
  );
}
