import { useSession } from '../contexts/session.context';
import { Login } from './Login';
import { List } from './List';

export const Home = () => {
  const { session } = useSession();
  console.log(JSON.stringify(session));

  return <>{!session.user ? <Login /> : <List />}</>;
};
