import { FormEvent, useRef } from 'react';
import { useSession } from '../contexts/session.context';
import { useNavigate } from 'react-router-dom';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const Login = () => {
  const { login } = useSession();
  const navigate = useNavigate();

  const idRef = useRef<HTMLInputElement | null>(null);

  const loginValidation = (id: number) => {
    // if (typeof id != 'number') {
    //   alert('invalid type! ID should be number');
    //   return false;
    // }

    if (!id) {
      idRef.current?.focus();
      return false;
    }

    if (id < 1 || id > 10) {
      alert('Invalid value! ID must be a number between 1 to 10');
      return false;
    }

    return true;
  };

  const loginHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = Number(idRef.current?.value);

    try {
      const res = await fetch(`${BASE_URL}/users?id=${id}`);
      const data = await res.json();

      const name = data[0].name;
      console.log('data', data);
      console.log('name', name);

      if (!name) {
        alert('No such user');
      }
      if (name && loginValidation(id)) {
        if (login(id, name)) navigate('/');
      } else {
        alert('Login Failed');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form onSubmit={loginHandler}>
        <input
          type='number'
          ref={idRef}
          className='border border-hana m-1 p-1 rounded'
          placeholder='id'
        />

        <button
          type='submit'
          className='bg-hana text-zinc-50 mt-3 font-bold rounded pl-2 pr-2 p-1'
        >
          Log-in
        </button>
      </form>
    </>
  );
};
