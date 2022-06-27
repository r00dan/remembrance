import { useEffect } from 'react';

import { IMainProps } from 'interfaces';
import { getServices } from 'api/services';
import { getUsers } from 'api/users';
import { Layout } from 'components';

import { ServiceList } from 'pages/Main/components/ServiceList/ServiceList';

import styles from './Main.module.scss';

export function Main({ services }: IMainProps) {
  useEffect(() => {
    getServices();
    getUsers();
  }, []);
  return (
    <Layout>
      <div className={styles.root}>
        <ServiceList
          data={services}
        />
      </div>
    </Layout>
  );
}
