import { NavLink } from 'react-router-dom';
import { useSession } from './contexts/session.context';
import { Logout } from './components/Logout';
import { LoginNav } from './components/LoginNav';

export const Nav = () => {
  const { session } = useSession();

  return (
    <>
      <nav className='flex justify-between mb-5 text-hana  pb-2'>
        <NavLink to='/' replace className='text-hana font-extrabold'>
          DigitalHana路
        </NavLink>

        <span className='flex flex-row min-w-72'>
          <span className='basis-2/3 underline'>
            {session.user?.id} {session.user?.name}
          </span>
          <span className='basis-1/3'>
            {session.user?.id ? <Logout /> : <LoginNav />}
          </span>
        </span>
      </nav>
    </>
  );
};
