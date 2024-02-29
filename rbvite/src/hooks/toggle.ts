import { useReducer } from 'react';

export const useToggle = (defaultVal: boolean = false) => {
  const [flag, toggle] = useReducer((pre) => !pre, defaultVal);

  return [flag, toggle] as const;
};
