import { useSession } from '../contexts/session.context';
import { Login } from './Login';
import { ListLayout } from './ListLayout';
export const Home = () => {
  const { session } = useSession();
  console.log(JSON.stringify(session));

  return <>{!session.user ? <Login /> : <ListLayout />}</>;
};
