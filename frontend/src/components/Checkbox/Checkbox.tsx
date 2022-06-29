import { ChangeEvent } from 'react';

import { ICheckboxProps } from 'interfaces';
import useCheckbox from './useCheckbox';

import styles from './Checkbox.module.scss';

export function Checkbox({
  id,
  label,
  onChange,
}: ICheckboxProps) {
  const { checked, switchCheck } = useCheckbox();
  console.log(checked);
  return (
    <div className={styles.root}>
      {label && (
        <label htmlFor={id}>{label}:</label>
      )}
      <input
        id={id}
        className={styles.input}
        type="checkbox"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          switchCheck();
          onChange(event);
        }}
      />
    </div>
  );
}
