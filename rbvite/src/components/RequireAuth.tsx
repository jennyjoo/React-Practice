import { PropsWithChildren, ReactNode, useEffect } from 'react';
import { useSession } from '../contexts/session.context';
import { useNavigate } from 'react-router-dom';

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

    //loginUser가 null인 경우, navigate되지 않음
    if (loginUser && !loginUser.id) {
      navigate('/');
    }
  }, [loginUser]);

  return <>{children}</>;
};
