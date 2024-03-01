import { ReactNode, RefObject } from 'react';

type LoginUser = {
  id: number;
  name: string;
};

type Album = {
  userId: number;
  id: number;
  title: string;
};

type Session = {
  user: LoginUser | null;
};

type sessionContextProp = {
  session: Session;
  login: (id: number, name: string) => boolean;
  logout: () => boolean;
};

type providerProps = {
  children: ReactNode;
  ref: RefObject<unknown> | null;
};
