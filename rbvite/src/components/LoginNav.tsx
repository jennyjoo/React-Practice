import { useNavigate } from 'react-router-dom';
import { useSession } from '../contexts/session.context';

export const LoginNav = () => {
  const { session } = useSession();
  const navigate = useNavigate();

  const loginHandler = () => {
    if (!session.user?.id) {
      navigate('/login');
    }
  };
  return (
    <>
      <button onClick={loginHandler}>Sign-in</button>
    </>
  );
};
