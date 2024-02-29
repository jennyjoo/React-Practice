import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/fetch';
import { useEffect, useState } from 'react';

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

const BASE_URL = `https://jsonplaceholder.typicode.com`;
export const AlbumDetail = () => {
  const { id } = useParams();
  const { data: photos, isLoading } = useFetch<Photo[] | null>({
    url: `https://jsonplaceholder.typicode.com/photos?albumId=${id}`,
  });

  const [dat, setDat] = useState<Photo[] | null>(null);

  return (
    <>
      <ul>
        {photos?.map((item) => (
          <li key={item.id}>
            {item.thumbnailUrl}
            <img src={item.thumbnailUrl} />
          </li>
        ))}
      </ul>
    </>
  );
};
