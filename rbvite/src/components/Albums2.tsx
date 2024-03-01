import { useRef } from 'react';
import { useFetch } from '../hooks/fetch';
import { useSession } from '../contexts/session.context';

export const AlbumList = () => {
  const {
    session: { user: loginUser },
  } = useSession();

  const albumHandler = useRef<AlbumHandler>();

  const { data: albums, isLoading } = useFetch<Album[] | null>({
    url: `${BASE_URL}/albums?=${loginUser!.id}`,
    enable: !loginUser,
  });

  return (
    <div>
      {isLoading && `is Loading`}
      <ul>
        {albums?.map((album) => (
          <li key={album.id}>
            <Album2 ref={albumHandler} />
          </li>
        ))}
      </ul>
    </div>
  );
};
