import { useNavigate, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/fetch';
import { NotFound } from './NotFound';
import { useSession } from '../contexts/session.context';

const BASE_URL = `https://jsonplaceholder.typicode.com`;

export const AlbumDetail = () => {
  const {
    session: { user: loginUser },
  } = useSession();
  const navigate = useNavigate();
  const { albumId } = useParams();
  const { data: photos, isLoading } = useFetch<Photo[] | null>({
    url: `${BASE_URL}/photos?albumId=${albumId}`,
    enable: !!albumId,
  });

  const { data: albumData } = useFetch<Album[] | null>({
    url: `${BASE_URL}/albums?id=${albumId}`,
    enable: !!albumId,
  });

  console.log(albumData);

  const goBackHandler = () => {
    navigate(`/${albumId}`);
  };
  return (
    <>
      {loginUser ? (
        !isLoading ? (
          <div className='container max-w-2xl mx-auto'>
            {isLoading && <h1>is Loading...</h1>}
            {albumData ? (
              <h1 className='font-extrabold'>{albumData[0].title}</h1>
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
        ) : (
          <h1>is Loading</h1>
        )
      ) : (
        <NotFound />
      )}
    </>
  );
};
