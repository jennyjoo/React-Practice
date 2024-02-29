import { useState } from 'react';
import { useSession } from '../contexts/session.context';
import { useFetch } from '../hooks/fetch';
import { Album } from './Album';

type Album = {
  userId: number;
  id: number;
  title: string;
};

type Selected = {
  selectedId: number | null;
};

const BASE_URL = 'https://jsonplaceholder.typicode.com';
export const Albums = () => {
  const {
    session: { user: loginUser },
  } = useSession();

  const { data: albums, isLoading } = useFetch<Album[]>({
    url: `${BASE_URL}/albums?userId=${loginUser?.id}`,
    dependency: [loginUser],
    enable: !(loginUser === null),
  });

  const [selected, setSelected] = useState<Selected>({ selectedId: null });

  return (
    <>
      {loginUser && isLoading ? <h1>isLoading...</h1> : null}
      {albums ? (
        <ul>
          {albums?.map((item) => (
            <li
              key={item.id}
              onClick={() => setSelected({ selectedId: item.id })}
            >
              <Album albumId={item.id} album={item} selected={selected} />
            </li>
          ))}
        </ul>
      ) : null}
      <button
        onClick={() => {}}
        className='bg-blue-500 rounded text-zinc-50 pl-5 pr-5 hover:bg-blue-400'
      >
        Details
      </button>
    </>
  );
};
