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
  album: Album[];
};

type sessionContextProp = {
  session: Session;
  login: (id: number, name: string) => void;
  logout: () => void;
};

type providerProps = {
  children: ReactNode;
  ref: RefObject<unknown> | null;
};
