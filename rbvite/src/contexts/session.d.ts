import { ReactNode, RefObject } from 'react';

type Album = {
  userId: number;
  id: number;
  title: string;
};

type providerProps = {
  children: ReactNode;
  ref: RefObject<unknown> | null;
};

type Action =
  | {
      type: 'login' | 'logout';
      payload: LoginUser | null;
    }
  | { type: 'set'; payload: Session };
