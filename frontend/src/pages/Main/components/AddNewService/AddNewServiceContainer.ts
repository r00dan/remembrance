import { createElement, useState } from 'react';
import { AddNewService } from './AddNewService';

export function AddNewServiceContainer() {
  const [collapsed, setCollapse] = useState<boolean>(false);
  const handleCollapse = () => setCollapse(!collapsed);
  return createElement(AddNewService, {
    collapsed,
    handleCollapse,
  });
}
