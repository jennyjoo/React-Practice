import { useState } from 'react';

export const useErr = (defaultVal: boolean = false) => {
  const [isErr, setErr] = useState(defaultVal);
  const errPersist = () => {
    setErr(true);
  };

  return { isErr, errPersist };
};

export const useErr2 = (defaultVal: boolean = false) => {
  let err = defaultVal;

  const errPersist2 = () => {
    err = true;
  };

  return function () {
    return { err, errPersist2 };
  };
};
