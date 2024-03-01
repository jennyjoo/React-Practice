import { NavLink } from 'react-router-dom';
import { useSession } from './contexts/session.context';
import { useNavigate } from 'react-router-dom';

export const Nav = () => {
  const { session, logout } = useSession();
  const navigate = useNavigate();

  const logoutHandler = () => {
    if (logout()) {
      navigate('/');
    }
  };
  return (
    <>
      <nav className='flex justify-between mb-5 text-hana border-b-2 pb-5 border-b-zinc-200'>
        <NavLink to='/' replace className='text-hana font-extrabold'>
          DigitalHana路
        </NavLink>

        <span className='flex flex-row min-w-72'>
          <span className='basis-2/3 underline'>
            {session.user?.id} {session.user?.name}
          </span>
          <span className='basis-1/3'>
            <button onClick={logoutHandler} className='text-hana'>
              {session.user && `logout`}
            </button>
          </span>
        </span>
      </nav>
    </>
  );
};
