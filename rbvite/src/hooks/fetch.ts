import { useEffect, useState } from 'react';

type FetchParam = {
  url: string | URL | globalThis.Request;
  option?: RequestInit;
  dependency?: unknown[];
  enable?: boolean;
};

export const useFetch = <T>({
  url,
  option = {},
  dependency = [],
  enable = true,
}: FetchParam) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    option.signal = controller.signal;
    if (!enable) return;

    (async function () {
      try {
        const res = await fetch(url, option);
        const data = (await res.json()) as T;

        setData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependency);

  return { data, isLoading };
};
