import { useEffect, useState } from 'react';
import { useFetch } from '../hooks/fetch';

const BASE_URL = 'https://jsonplaceholder.typicode.com/photos?albumId=';

export const Album = ({
  album,
  albumId,
}: {
  album?: Album;
  albumId?: number;
}) => {
  //===== states =====
  const [albumData, setAlbumData] = useState<Album | null>(null);

  //===== data =====

  //data
  const url = `${BASE_URL}${albumId}`;
  const { data } = useFetch<Album>({ url, enable: !album });

  useEffect(() => {
    if (data) {
      setAlbumData(data);
      return;
    }
    if (album) {
      setAlbumData(album);
      return;
    }
  }, [data, albumId]);

  return (
    <>
      <div>{albumData ? `${albumData.title}` : `isLoading`}</div>
    </>
  );
};
