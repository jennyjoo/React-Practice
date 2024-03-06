import { useNavigate } from 'react-router-dom';
import { useSession } from '../contexts/session.context';
import './home.css';

export const Home = () => {
  const { session } = useSession();
  const navigate = useNavigate();
  console.log('ssss>>>', session);
  return (
    <>
      <header id='home-header' className='p-10'>
        <h1 className='font-bold text-5xl pb-20 text-zinc-50'>
          DigitalHana路 개발 3기 2차 과제
        </h1>
        {session.user?.id && (
          <button
            onClick={() => navigate('/albums')}
            className=' border-zinc-50 border-2 hover:bg-zinc-50 hover:text-hana text-zinc-50 font-black p-3 pl-5 pr-5 rounded-full'
          >
            ALBUMS
          </button>
        )}
      </header>
      <body className='p-5 mt-10 border-t-2 border-hana'>
        <h1 className='font-extrabold text-4xl mt-10'>
          금융개발 3기 프론트엔드 과제 2
        </h1>

        <h2 className='p-5 mb-20 text-xl font-medium'>2024.02. ~ 2024.03.02</h2>
        <h1 className='text-hana text-xl font-semibold mb-4'>
          | 주제, 요구사항 |
        </h1>
        <h1 className='font-bold text-2xl mb-10 '>
          jasonplaceholder API로 로그인 사이트 만들기
        </h1>
        <div className='text-start pl-20 pr-20 border-hana border-2 p-10 rounded-2xl'>
          <h2 className='text-2xl font-bold mb-10'>요구사항</h2>
          <ul className='flex flex-col gap-4 text-start '>
            <li>1. API는 jsonplaceholder의 어쩌구저쩌구 랄랄라 보세요</li>
            <li>2. 로그인된 사용자는 useReducer, useContext 이런거 쓰세용</li>
            <li>3. 왜 인덱스 번호가 안 뜨지? 저는 css가 싫어요!</li>
            <li>4. 왜 Gap 은 안 먹어? 일일히 다 해야함?</li>
            <li>5. Linux 멋있어보여요, 얕은지식? 제 전문이죠</li>
            <li>
              6. 대신 알기만 앎, 깊이 있는 이해는 남의 이야기, 나는 융합형 인재
            </li>
            <li>7. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사</li>
          </ul>
        </div>
      </body>
    </>
  );
};
