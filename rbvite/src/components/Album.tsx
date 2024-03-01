import { useEffect, useState } from 'react';
import { useFetch } from '../hooks/fetch';

type Album = {
  userId: number;
  id: number;
  title: string;
};

const BASE_URL = 'https://jsonplaceholder.typicode.com/photos?albumId=';

export const Album = ({
  album,
  albumId,
}: {
  album?: Album;
  albumId?: number;
}) => {
  const [albumData, setAlbumData] = useState<Album | null>(null);

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

  return (
    <>
      <div>
        {isLoading && `Loading...`}
        {albumData && `${albumData.title}`}
      </div>
    </>
  );
};
