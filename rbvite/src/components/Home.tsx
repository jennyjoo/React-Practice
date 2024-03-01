import { useSession } from '../contexts/session.context';
import { Albums } from './Albums';
import { Login } from './Login';
export const Home = () => {
  const { session } = useSession();
  console.log(JSON.stringify(session));

  return (
    <>
      <div className='container max-w-2xl mx-auto'>
        {/* 얘를 빼야함 */}
        {!session.user ? <Login /> : <Albums />}
      </div>
    </>
  );
};
