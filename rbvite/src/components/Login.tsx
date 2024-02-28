import { FormEvent, useRef } from 'react';
import { useSession } from '../contexts/session.context';

export const Login = () => {
  const { login } = useSession();

  const idRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);

  const loginHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = Number(idRef.current?.value);
    console.log('idid ', id);
    const nickname = nameRef.current?.value;
    console.log('namename ', name);

    if (!id) {
      idRef.current?.focus();
      return;
    }
    if (!nickname) {
      nameRef.current?.focus();
      return;
    }
    console.log('호출');
    login(id, nickname ?? '');
  };

  return (
    <>
      <form onSubmit={loginHandler} className='grid w-1/3'>
        <input
          type='number'
          ref={idRef}
          className='border border-blue-500 m-1 p-1 rounded'
          placeholder='id'
        />
        <input
          type='string'
          ref={nameRef}
          className='border border-blue-500 m-1 p-1 rounded'
          placeholder='number'
        />
        <button
          type='submit'
          className='bg-blue-500 text-zinc-50 mt-3 rounded pl-2 pr-2 p-1'
        >
          Log-in
        </button>
      </form>
    </>
  );
};
