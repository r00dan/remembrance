import { ChangeEventHandler } from 'react';

export interface IInputProps {
  id: string;
  value: string;
  label?: string;
  isPassword?: boolean;
  disabled?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
}
