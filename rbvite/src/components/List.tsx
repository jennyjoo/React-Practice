import { useSession } from '../contexts/session.context';
import { useFetch } from '../hooks/fetch';

type Album = {
  userId: number;
  id: number;
  title: string;
};

export const List = () => {
  const { session } = useSession();
  const BASE_URL = '';
  const { data, isLoading } = useFetch<Album[]>({
    url: BASE_URL,
    enable: !(session.user === null),
  });

  return (
    <>
      <div>배고파</div>
    </>
  );
};
