import { NavLink, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { useSession } from '../contexts/session.context';

export const Nav = () => {
  const { session, logout } = useSession();
  const navigate = useNavigate();
  const logoutHandler = () => {
    logout();
    navigate('/');
  };
  return (
    <>
      <nav className='flex justify-between'>
        <NavLink
          to='/'
          className={({ isActive, isPending, isTransitioning }) =>
            clsx({
              'text-blue-900 hover:underline': isActive,
              'hover:underline': !isActive,
              'border border-red-500': isPending || isTransitioning,
            })
          }
        >
          logo
        </NavLink>
        {session.user && (
          <NavLink
            to='/list'
            className={({ isActive, isPending, isTransitioning }) =>
              clsx({
                'text-blue-900 hover:underline': isActive,
                'hover:underline': !isActive,
                'border border-red-500': isPending || isTransitioning,
              })
            }
          >
            List
          </NavLink>
        )}
        <button onClick={logoutHandler} className='text-blue-800'>
          {session.user && `logout`}
        </button>
      </nav>
    </>
  );
};
