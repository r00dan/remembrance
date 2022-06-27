import { useEffect } from 'react';
import { getServices } from '../../api/services';
import { getUsers } from '../../api/users';
import {
  Layout,
} from '../../components';
import { IService } from './components/Service/ServiceContainer';
import { ServiceList } from './components/ServiceList/ServiceList';

import styles from './Main.module.scss';

interface IMainProps {
  services: IService[];
}

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
