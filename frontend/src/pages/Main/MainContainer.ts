import { createElement, useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_SERVICES } from 'api';
import { IService } from 'interfaces';

import { Main } from './Main';

export function MainContainer() {
  const [services, setServices] = useState<IService[]>([]);

  const {
    data,
    loading,
  } = useQuery(GET_SERVICES);

  useEffect(() => {
    if (data) {
      setServices(data.getServices);
    }
  }, [loading]);

  return createElement(Main, {
    loading,
    services,
  });
}
