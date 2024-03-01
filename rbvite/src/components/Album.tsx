import { useEffect, useState } from 'react';
import { useFetch } from '../hooks/fetch';
import clsx from 'clsx';

type Album = {
  userId: number;
  id: number;
  title: string;
};

type Selected = {
  selectedId: number | null;
};

// type AlbumDetail = {
//   albumId: number;
//   id: number;
//   url: string;
//   thumbnailUrl: string;
// };

// const DefaultAlbum: Album = {
//   userId: 0,
//   id: 0,
//   title: '',
// };

const BASE_URL = 'https://jsonplaceholder.typicode.com/photos?albumId=';

export const Album = ({
  album,
  albumId,
  selected,
}: {
  album?: Album;
  albumId?: number;
  selected: Selected;
}) => {
  const [albumData, setAlbumData] = useState<Album | null>(null);
  //   const [isOpen, toggle] = useToggle();
  //   console.log('****', selected, albumId);

  const url = `${BASE_URL}${albumId}`;
  const { data, isLoading } = useFetch<Album>({ url });

  useEffect(() => {
    if (data) {
      setAlbumData(data);
      return;
    }
    if (album) {
      setAlbumData(album);
      return;
    }
  }, []);

  //   useEffect(() => {
  //     if (selected.selectedId === albumData?.id) toggle();
  //   }, [selected]);

  return (
    <>
      {isLoading && `Loading...`}
      {albumData && (
        <span
          className={clsx({
            'text-hanared font-extrabold': selected.selectedId === albumId,
          })}
        >
          {albumData.id} {albumData.title}
        </span>
      )}
    </>
  );
};
