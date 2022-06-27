import { createElement, useState } from 'react';
import { useNotification } from '../../../../hooks/useNotification';

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
  const { updateToast } = useNotification();
  const handleCollapse = () => setCollapse(!collapsed);
  const handleEditMode = () => setEditMode(!editMode);
  const hadleInputClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const target = event.target as HTMLButtonElement;
    const { value } = target;

    if (!editMode && value) {
      window.navigator.clipboard.writeText(value);
      updateToast('Copied!');
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
