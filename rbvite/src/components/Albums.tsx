import { useState } from 'react';
import { useSession } from '../contexts/session.context';
import { useFetch } from '../hooks/fetch';
import { Album } from './Album';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const goTo = (id: number | null) => {
    if (id) {
      setSelected({ selectedId: id });
      console.log('lllllll', id);
      navigate(`/albums/${id}   `);
      return;
    }
  };

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
              <Album
                albumId={item.id}
                album={item}
                selected={selected}
                toggleSelected={() => {}}
              />
            </li>
          ))}
        </ul>
      ) : null}
      <button
        onClick={() => goTo(selected.selectedId)}
        className='bg-blue-500 rounded text-zinc-50 pl-5 pr-5 hover:bg-blue-400'
      >
        Details
      </button>
    </>
  );
};
