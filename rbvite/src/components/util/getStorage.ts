import { setStorage } from './setStorage';
export function getStorage<T>(SKEY: string, DefaultData: T) {
  const storedData = localStorage.getItem(SKEY);
  console.log({ storedData });
  if (storedData) {
    return JSON.parse(storedData) as T;
  }

  setStorage<T>(SKEY, DefaultData);

  return DefaultData;
}
