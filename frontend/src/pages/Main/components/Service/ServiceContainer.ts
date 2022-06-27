import { createElement, useState } from 'react';

import { Service } from './Service';

export interface IService {
  name: string;
  username: string;
  email: string;
  password: string;
  icon?: string;
}

export function ServiceContainer({
  name,
  username,
  email,
  password,
  icon = '📷️',
}: IService) {
  const [collapsed, setCollapse] = useState<boolean>(true);
  const [editMode, setEditMode] = useState<boolean>(false);

  const handleCollapse = () => setCollapse(!collapsed);
  const handleEditMode = () => setEditMode(!editMode);
  const hadleInputClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const target = event.target as HTMLButtonElement;
    const { value } = target;

    if (!editMode && value) {
      console.log(`Copied string: ${value}`);
      window.navigator.clipboard.writeText(value);
      // notification
    }
  };

  return createElement(Service, {
    name,
    username,
    email,
    password,
    icon,
    collapsed,
    editMode,
    handleCollapse,
    handleEditMode,
    hadleInputClick,
  });
}
