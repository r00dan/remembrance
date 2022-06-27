import { IInputProps } from 'interfaces';
import { useInput } from './useInput';

import styles from './Input.module.scss';

export function Input({
  id,
  value,
  label,
  isPassword = false,
  disabled = false,
  onChange,
  onClick = () => {},
}: IInputProps) {
  const {
    visible,
    inputType,
    onChangeVisibility,
  } = useInput(isPassword);
  return isPassword ? (
    <div
      className={styles.root}
      onClick={onClick}
    >
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
        disabled={disabled}
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
    <div
      className={styles.root}
      onClick={onClick}
    >
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
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
}
