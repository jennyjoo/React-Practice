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
  const [data, setData] = useState<T | undefined>(undefined);
  // const [errorMsg, setErrMsg] = useState<string | null>(null);
  //실제로 errMsg가 효과가 없었습니다...

  useEffect(() => {
    const controller = new AbortController();
    option.signal = controller.signal;
    if (!enable) return;

    (async function () {
      try {
        const res = await fetch(url, option);
        const dat = (await res.json()) as T;

        setData(dat);
      } catch (err) {
        // if (err instanceof Error) {
        //   setErrMsg(JSON.stringify(err));
        // }
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, dependency);

  // return { data, isLoading, errorMsg };
  return { data, isLoading };
};
