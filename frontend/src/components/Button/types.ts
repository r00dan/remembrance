import { ReactNode } from 'react';

export interface IButtonProps {
  children: ReactNode;
  theme?: Themes;
  className?: string;
  onClick: () => void;
}

export enum Themes {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  GRADIENT = 'gradient',
}
