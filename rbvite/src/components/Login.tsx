import { FormEvent, useEffect, useRef, useState } from 'react';
import { useSession } from '../contexts/session.context';
import { useErr } from '../hooks/err';

export const Login = () => {
  const { login } = useSession();

  const idRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);

  const { isErr, errPersist } = useErr(false);

  const loginValidation = (id: number) => {
    if (id < 1 || id > 99) {
      return `아이디는 1 이상 99 이하여야 합니다`;
    }

    return;
  };

  const loginHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = Number(idRef.current?.value);
    const nickname = nameRef.current?.value;

    if (!id) {
      idRef.current?.focus();
      errPersist();
      return;
    }
    if (!nickname) {
      nameRef.current?.focus();
      errPersist();
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
          placeholder='name'
        />
        <button
          type='submit'
          className='bg-blue-500 text-zinc-50 mt-3 rounded pl-2 pr-2 p-1'
        >
          Log-in
        </button>
      </form>
      {isErr && `안됨`}
    </>
  );
};
