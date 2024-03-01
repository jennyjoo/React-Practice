import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/fetch';

const BASE_URL = `https://jsonplaceholder.typicode.com`;

export const AlbumDetail = () => {
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
  return (
    <>
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
      </div>
    </>
  );
};
