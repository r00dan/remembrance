import { createElement, useState, useEffect } from 'react';
import { IService } from 'interfaces';

import { Main } from './Main';

export function MainContainer() {
  const [services, setServices] = useState<IService[]>([]);

  const addService = (service: IService) => setServices((prevState) => ([...prevState, service]));

  useEffect(() => {
    /** getServicesQuery */

    addService({
      name: 'Battle.net',
      username: 'myBattlenetUsername',
      email: 'my@battle.net',
      password: 'qweqwe',
    });
    addService({
      name: 'Steam',
      username: 'mySteamUsername',
      email: 'my@steam.com',
      password: '123qwe',
    });
  }, []);

  return createElement(Main, {
    services,
  });
}
