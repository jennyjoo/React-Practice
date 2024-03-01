type AlbumDetail = {
  albumId: number;
  id: number;
  url: string;
  thumbnailUrl: string;
};

type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

type Album = {
  userId: number;
  id: number;
  title: string;
};

type AlbumHandler = {
  select: (id: number) => void;
};

type providerProps = {
  children: ReactNode;
};

type Action =
  | {
      type: 'login' | 'logout';
      payload: LoginUser | null;
    }
  | { type: 'set'; payload: Session };
