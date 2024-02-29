import { useSession } from '../contexts/session.context';
import { Albums } from './Albums';
import { Login } from './Login';
export const Home = () => {
  const { session } = useSession();
  console.log(JSON.stringify(session));

  return <>{!session.user ? <Login /> : <Albums />}</>;
};
