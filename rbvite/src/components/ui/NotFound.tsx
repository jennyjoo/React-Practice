import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 2000);
  }, []);

  return (
    <>
      <h1 className='font-extrabold text-5xl'>{location.pathname} NotFound</h1>
      <p>sorry, something went wrong 😢</p>
    </>
  );
};
