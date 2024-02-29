import { useSession } from '../contexts/session.context';
import { useFetch } from '../hooks/fetch';

type Album = {
  userId: number;
  id: number;
  title: string;
};

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const ListLayout = () => {
  const {
    session: { user: loginUser },
  } = useSession();

  const { data, isLoading } = useFetch<Album[]>({
    url: `${BASE_URL}/albums?userId=${loginUser?.id}`,
    dependency: [loginUser],
    enable: !(loginUser === null),
  });

  return (
    <>
      <div className='text-center'>
        {loginUser && (
          <h1 className='font-bold text-2xl'>{loginUser.id}'s Album</h1>
        )}
        {isLoading && 'loading'}
        <ul className='text-start w-40'>
          {data?.map((item) => (
            <li key={item.id}>
              {`#${item.id}
              ${item.title}`}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
