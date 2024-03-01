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
    if (!loginUser) {
      navigate('/');
    }
  }, [loginUser, navigate]);
  return <>{children}</>;
};
