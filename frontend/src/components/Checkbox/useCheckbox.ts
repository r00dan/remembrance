import { useState } from 'react';

export default function useCheckbox() {
  const [checked, setChecked] = useState<boolean>(false);

  const switchCheck = () => setChecked(!checked);
  return {
    checked,
    switchCheck,
  };
}
