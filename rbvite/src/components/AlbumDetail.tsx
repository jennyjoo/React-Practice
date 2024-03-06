import { useNavigate, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/fetch';
// import { UnknownError } from './ui/UnknownError';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const AlbumDetail = () => {
  //===== data =====

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
    navigate(`/albums/?albumId=${albumId}`);
  };

  return (
    <>
      {/* {errorMsg && isLoading ? (
        <UnknownError />
      ) : ( */}
      <div className='container max-w-2xl mx-auto'>
        {isLoading && <h1>is Loading...</h1>}
        {albumData ? (
          <h1 className='flex justify-between items-center font-semibold text-xl text-start  p-3 border-b-2 border-hana '>
            <span>
              <span className='text-hana mr-2'>Albums &gt;</span>{' '}
              {albumData[0].id} {albumData[0].title}
            </span>
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
      {/* )} */}
    </>
  );
};
