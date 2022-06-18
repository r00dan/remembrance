import { ReactNode } from 'react';

export interface IButtonProps {
  children: ReactNode;
  theme?: Themes;
}

export enum Themes {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

// export type ButtonThemes = Themes.PRIMARY | Themes.SECONDARY;
