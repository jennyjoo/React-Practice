import { useNavigate } from 'react-router-dom';
import { useSession } from '../contexts/session.context';

export const Logout = () => {
  const { logout } = useSession();
  const navigate = useNavigate();

  const logoutHandler = () => {
    if (logout()) navigate('/');
  };
  return (
    <>
      <button onClick={logoutHandler}>Sign-out!</button>
    </>
  );
};
