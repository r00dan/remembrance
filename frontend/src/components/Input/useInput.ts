import { useState } from 'react';

enum InputTypes {
  TEXT = 'text',
  PASSWORD = 'password',
}

export function useInput(isPassword: boolean) {
  const [state, setState] = useState<boolean>(isPassword);

  return {
    visible: state,
    inputType: state ? InputTypes.PASSWORD : InputTypes.TEXT,
    onChangeVisibility: () => setState(!state),
  };
}
