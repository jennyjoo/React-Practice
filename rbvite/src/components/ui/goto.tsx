import { PropsWithChildren, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

type Prop = {
  children: ReactNode;
  url: string;
  className?: string;
};
export const Goto = ({ children, url, className }: PropsWithChildren<Prop>) => {
  const navigate = useNavigate();

  const handler = () => {
    console.log(url);
    navigate(url);
  };

  return (
    <>
      <button onClick={handler} className={className}>
        {children}
      </button>
    </>
  );
};
