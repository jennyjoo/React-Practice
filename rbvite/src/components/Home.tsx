import { useSession } from '../contexts/session.context';
import { Login } from './Login';
import { Albums } from './Albums';
export const Home = () => {
  const { session } = useSession();
  console.log('ssss>>>', session);
  return (
    <>
      <div className='container max-w-2xl mx-auto'>
        {!session.user?.id ? <Login /> : <Albums />}
      </div>
    </>
  );
};
