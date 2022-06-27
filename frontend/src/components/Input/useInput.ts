import { useState } from 'react';

import { InputTypes } from 'types/enums';

export function useInput(isPassword: boolean) {
  const [state, setState] = useState<boolean>(isPassword);

  return {
    visible: state,
    inputType: state ? InputTypes.PASSWORD : InputTypes.TEXT,
    onChangeVisibility: () => setState(!state),
  };
}
