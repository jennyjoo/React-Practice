import { useNavigate, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/fetch';
import { useEffect, useState } from 'react';
import { useSession } from '../contexts/session.context';
import { UnknownError } from './ui/UnknownError';
// import { UnknownError } from './ui/UnknownError';
import { Goto } from './ui/goto';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const AlbumDetail = () => {
  //===== data =====

  const {
    session: { user: loginUser },
  } = useSession();
  const [authorized, setAuth] = useState(true);

  //albumId
  const { albumId } = useParams();

  //albumData
  const { data: albumData } = useFetch<Album[] | null>({
    url: `${BASE_URL}/albums?id=${albumId}`,
    enable: !!albumId,
  });

  //photos
  const { data: photos, isLoading } = useFetch<Photo[] | null>({
    url: `${BASE_URL}/photos?albumId=${albumId}`,
    enable: !!albumId,
  });

  //===== hooks =====
  const navigate = useNavigate();

  //===== handlers =====
  const goBackHandler = () => {
    navigate(`/albums?albumId=${albumId}`);
  };

  useEffect(() => {
    const hasItem = albumData?.find((item) => item.userId === loginUser?.id);

    if (albumData && !hasItem) {
      setAuth(false);
    }
  }, [albumData]);

  return (
    <>
      {/* {errorMsg && isLoading ? (
        <UnknownError />
      ) : ( */}
      {authorized ? (
        <div className='container max-w-2xl mx-auto'>
          {isLoading && <h1>is Loading...</h1>}

          <h1 className='text-start pl-3 text-hana'>
            <Goto
              url={`/albums?albumId=${Number(albumId)}`}
              className='hover:underline text-slate-400'
            >
              My Album
            </Goto>{' '}
            &gt; Detail
          </h1>

          {albumData ? (
            <h1 className='flex justify-between items-center font-semibold text-xl text-start  p-3 border-b-2 border-hana '>
              {albumData[0].id} {albumData[0].title}
              <button
                onClick={() => goBackHandler()}
                className='bg-hana rounded-full text-base font-semibold text-zinc-50 p-1 hover:border hover:border-hana hover:bg-transparent hover:text-hana w-1/5 '
              >
                Go Back
              </button>
            </h1>
          ) : (
            `is Loading`
          )}
          <ul className='flex flex-wrap mt-10'>
            {photos?.map((item) => (
              <li className='w-1/4' key={item.id}>
                <img className='p-2' src={item.thumbnailUrl} alt='' />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <UnknownError />
      )}

      {/* )} */}
    </>
  );
};
