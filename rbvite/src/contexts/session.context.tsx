import {
  createContext,
  useContext,
  useReducer,
  useCallback,
  useEffect,
} from 'react';
import { ReactNode, RefObject } from 'react';
import { LoginUser, sessionContextProp, Session } from './session';

type providerProps = {
  children: ReactNode;
  ref: RefObject<unknown> | null;
};

type Action =
  | {
      type: 'login' | 'logout';
      payload: LoginUser | null;
    }
  | { type: 'set'; payload: Session };

enum ACTION {
  LOG_IN = 'login',
  LOG_OUT = 'logout',
  SET = 'set',
}

const SessionContext = createContext<sessionContextProp>({
  session: { user: null, album: [] },
  login: () => {
    return false;
  },
  logout: () => {},
});

const SKEY = 'session';
const DefaultSession: Session = {
  user: null,
  album: [],
};
function getStorage() {
  const storedData = localStorage.getItem(SKEY);
  if (storedData) {
    return JSON.parse(storedData) as Session;
  }

  setStorage(DefaultSession);

  return DefaultSession;
}

function setStorage(session: Session) {
  localStorage.setItem(SKEY, JSON.stringify(session));
}

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

  setStorage(newer);
  return newer;
};

export const SessionProvider = ({ children, ref }: providerProps) => {
  const [session, dispatch] = useReducer(reducer, DefaultSession);

  if (ref?.current) {
    console.log('hi');
  }

  const login = useCallback((id: number, name: string) => {
    console.log('되나', id, name);
    dispatch({ type: ACTION.LOG_IN, payload: { id, name } });
    return true;
  }, []);

  const logout = useCallback(() => {
    dispatch({ type: ACTION.LOG_OUT, payload: null });
  }, []);

  useEffect(() => {
    dispatch({ type: ACTION.SET, payload: getStorage() });
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
