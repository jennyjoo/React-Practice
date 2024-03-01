export function setStorage<T>(SKEY: string, session: T) {
  localStorage.setItem(SKEY, JSON.stringify(session));
}
