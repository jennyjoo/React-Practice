import { useSession } from '../contexts/session.context';
import { Login } from './Login';
import { Albums } from './Albums';
export const Home = () => {
  const { session } = useSession();

  return (
    <>
      <div className='container max-w-2xl mx-auto'>
        {!session.user ? <Login /> : <Albums />}
      </div>
    </>
  );
};
