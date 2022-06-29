import { IMainProps } from 'interfaces';
import { Layout } from 'components';

import { ServiceList } from 'pages/Main/components/ServiceList/ServiceList';

import styles from './Main.module.scss';

export function Main({ services, loading }: IMainProps) {
  return (
    <Layout>
      <div className={styles.root}>
        {loading ? (
          <div>Loading . . .</div>
        ) : (
          <ServiceList
            data={services}
          />
        )}
      </div>
    </Layout>
  );
}
