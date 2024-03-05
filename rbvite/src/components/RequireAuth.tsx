import { PropsWithChildren, ReactNode, useEffect } from 'react';
import { useSession } from '../contexts/session.context';
import { useNavigate } from 'react-router-dom';
// type Session = {
//   user: LoginUser | null;
// };
type Prop = {
  children: ReactNode;
};

export const RequireAuth = ({ children }: PropsWithChildren<Prop>) => {
  const {
    session: { user: loginUser },
  } = useSession();

  const navigate = useNavigate();

  useEffect(() => {
    console.log('logUser', loginUser);
    if (loginUser && !loginUser.id) {
      navigate('/');
    }
  }, [loginUser]);

  // useEffect(() => {
  //   console.log('logUser', loginUser);
  //   const dat = localStorage.getItem('session');

  //   console.log('dat', dat);
  //   if (dat) {
  //     const user = JSON.parse(dat) as Session;
  //     if (!user) {
  //       navigate('/');
  //     }
  //   }
  // }, [loginUser]);

  return <>{children}</>;
};
