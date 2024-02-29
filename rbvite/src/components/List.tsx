import { useFetch } from '../hooks/fetch';

type Album = {
  userId: number;
  id: number;
  title: string;
};

export const List = () => {
  const BASE_URL = '';
  const { data, isLoading } = useFetch<Album[]>({ url: BASE_URL });
  return (
    <>
      <div>배고파</div>
    </>
  );
};
