import { useSession } from '../contexts/session.context';
import { useFetch } from '../hooks/fetch';
import { Album } from './Album';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

type Album = {
  userId: number;
  id: number;
  title: string;
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

  const { id } = useParams();
  const [selected, setSelected] = useState<number | null>(null);

  const navigate = useNavigate();

  const goTo = (id: number | null) => {
    if (id) {
      navigate(`/albums/detail/${id}`);
      return;
    } else {
      alert('Select an album');
      return;
    }
  };

  const selectAlbum = (id: number) => {
    if (selected === id) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  };

  useEffect(() => {
    if (id != 'none') {
      setSelected(Number(id));
    }
  }, []);

  return (
    <>
      <div className='container max-w-2xl mx-auto'>
        <h1 className='font-semibold text-xl text-start pl-7 p-3 text-zinc-50 bg-hana rounded-t-2xl'>
          <strong>{loginUser ? `${loginUser?.name}'s  ` : `...`}</strong> Album
          List
        </h1>
        {loginUser && isLoading ? <h1>isLoading...</h1> : null}
        {albums ? (
          <ol className='text-start border-b-2 border-b-hana' start={1}>
            {albums?.map((item, index) => (
              <li
                key={item.id}
                className={clsx({
                  'p-3': true,
                  'border-b-2 border-zinc-100': item.id != albums?.length,
                })}
              >
                <span className='mr-7'>{index + 1} </span>
                <button
                  onClick={() => selectAlbum(item.id)}
                  className={clsx({
                    'text-hanared font-bold underline': selected === item.id,
                  })}
                >
                  <Album albumId={item.id} album={item} />
                </button>
              </li>
            ))}
          </ol>
        ) : null}
        <button
          onClick={() => goTo(selected)}
          className='bg-hana rounded-2xl font-semibold text-zinc-50 p-2 mt-4 hover:border hover:border-hana hover:bg-transparent hover:text-hana w-1/4 '
        >
          Details
        </button>
      </div>
    </>
  );
};
