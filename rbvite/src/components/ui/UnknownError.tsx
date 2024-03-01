import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export const UnknownError = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 2000);
  }, []);

  return (
    <>
      <h1 className='font-extrabold text-3xl'>
        Unknown Error during the fetch
      </h1>
      <p>sorry, something went wrong 😢</p>
    </>
  );
};
