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

const BASE_URL = 'https://jsonplaceholder.typicode.com';

type AlbumHandler = {
  select: (id: number) => void;
};
