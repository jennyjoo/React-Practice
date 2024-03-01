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
      <div className='container max-w-2xl mx-auto'>
        <h1 className='font-semibold text-xl text-start p-3 text-zinc-50 bg-hana rounded-t-2xl'>
          Album List
        </h1>
        {loginUser && isLoading ? <h1>isLoading...</h1> : null}
        {albums ? (
          <ul className='text-start border-b-2 border-b-hana'>
            {albums?.map((item) => (
              <li
                key={item.id}
                onClick={() => setSelected({ selectedId: item.id })}
                className='m-7'
              >
                <Album albumId={item.id} album={item} selected={selected} />
              </li>
            ))}
          </ul>
        ) : null}
        <button
          onClick={() => goTo(selected.selectedId)}
          className='bg-hana rounded-2xl font-semibold text-zinc-50 p-2 mt-4 hover:border hover:border-hana hover:bg-transparent hover:text-hana w-1/4 '
        >
          Details
        </button>
      </div>
    </>
  );
};
