import { ChangeEventHandler } from 'react';

export interface IInputProps {
  id: string;
  value: string;
  label?: string;
  isPassword?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
