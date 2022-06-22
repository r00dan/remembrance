import { IInputProps } from './types';

import styles from './Input.module.scss';
import { useInput } from './useInput';

export function Input({
  id,
  value,
  label,
  isPassword = false,
  onChange,
}: IInputProps) {
  const { visible, inputType, onChangeVisibility } = useInput(isPassword);
  return isPassword ? (
    <div className={styles.root}>
      {label && (
        <label
          htmlFor={id}
          className={styles.label}
        >
          {label}:
        </label>
      )}
      <input
        id={id}
        className={styles.input}
        type={inputType}
        value={value}
        onChange={onChange}
      />
      <div
        className={styles.passwordSwitch}
        onClick={onChangeVisibility}
      >
        {visible ? '🙈' : '🐵'}
      </div>
    </div>
  ) : (
    <div className={styles.root}>
      {label && (
        <label
          htmlFor={id}
          className={styles.label}
        >
          {label}:
        </label>
      )}
      <input
        id={id}
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
