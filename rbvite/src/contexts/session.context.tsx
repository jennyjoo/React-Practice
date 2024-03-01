import {
  createContext,
  useContext,
  useReducer,
  useCallback,
  useEffect,
} from 'react';
import { getStorage, setStorage } from '../components/util/setLocalStorage';

enum ACTION {
  LOG_IN = 'login',
  LOG_OUT = 'logout',
  SET = 'set',
}

type LoginUser = {
  id: number;
  name: string;
};

type Session = {
  user: LoginUser | null;
};

type sessionContextProp = {
  session: Session;
  login: (id: number, name: string) => boolean;
  logout: () => boolean;
};

const SessionContext = createContext<sessionContextProp>({
  session: { user: null },
  login: () => {
    return false;
  },
  logout: () => {
    return false;
  },
});

const SKEY = 'session';
const DefaultSession: Session = {
  user: null,
};

const reducer = (session: Session, { type, payload }: Action) => {
  let newer;
  switch (type) {
    case ACTION.LOG_IN:
      newer = { ...session, user: payload };
      break;

    case ACTION.LOG_OUT:
      newer = { ...session, user: payload };
      break;

    case ACTION.SET:
      newer = { ...payload };
      break;

    default:
      return session;
  }

  setStorage(SKEY, newer);
  return newer;
};

export const SessionProvider = ({ children }: providerProps) => {
  const [session, dispatch] = useReducer(reducer, DefaultSession);

  const login = useCallback((id: number, name: string) => {
    console.log('name', name);
    dispatch({ type: ACTION.LOG_IN, payload: { id, name } });

    return true;
  }, []);

  const logout = useCallback(() => {
    dispatch({ type: ACTION.LOG_OUT, payload: null });
    return true;
  }, []);

  useEffect(() => {
    dispatch({ type: ACTION.SET, payload: getStorage(SKEY, DefaultSession) });
  }, []);

  return (
    <>
      <SessionContext.Provider value={{ session, login, logout }}>
        {children}
      </SessionContext.Provider>
    </>
  );
};

export const useSession = () => useContext(SessionContext);
