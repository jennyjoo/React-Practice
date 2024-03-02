import { useNavigate, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/fetch';
import { useCallback } from 'react';
// import { UnknownError } from './ui/UnknownError';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const AlbumDetail = () => {
  //===== data =====

  //albumId
  const { albumId } = useParams();

  //albumData
  // const { data: albumData, errorMsg } = useFetch<Album[] | null>({
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
  const goBackHandler = useCallback(() => {
    navigate(`/${albumId}`);
  }, [albumId]);

  return (
    <>
      {/* {errorMsg && isLoading ? (
        <UnknownError />
      ) : ( */}

      <div className='container max-w-2xl mx-auto'>
        {isLoading && <h1>is Loading...</h1>}
        {albumData ? (
          <h1 className='font-semibold text-xl text-start pl-7 p-3 text-zinc-50 bg-hana rounded-t-2xl'>
            {albumData[0].id} {albumData[0].title}
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
        <button
          onClick={() => goBackHandler()}
          className='bg-hana rounded-2xl font-semibold text-zinc-50 p-2 mt-4 hover:border hover:border-hana hover:bg-transparent hover:text-hana w-1/4 '
        >
          Go Back
        </button>
      </div>
      {/* )} */}
    </>
  );
};
