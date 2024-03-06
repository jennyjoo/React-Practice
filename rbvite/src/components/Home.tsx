import { useNavigate } from 'react-router-dom';
import { useSession } from '../contexts/session.context';
import { RenderSection } from './RenderSection';
import './home.css';
type List = {
  subTitle?: string;
  li: string[];
};
type SectionType = {
  title: string;
  contents: List[];
};

const RequirementList: List[] = [
  {
    subTitle: 'jasonplaceholder API 사용한 로그인 사이트 구현',
    li: [
      'API는 jsonplaceholder의 어쩌구저쩌구 보세요',
      '로그인된 사용자는 useReducer, useContext 이런거 쓰세용',
      '왜 인덱스 번호가 안 뜨지? 저는 css가 싫어요!',
      '왜 Gap 은 안 먹어? 일일히 다 해야함?',
      ' Linux 멋있어보여요, 얕은지식? 제 전문이죠',
      '대신 알기만 앎, 깊이 있는 이해는 남의 이야기, 나는 융합형 인재',
      ' 동해물과 백두산이 마르고 닳도록 하느님이 보우하사',
    ],
  },
];

const acquired: string =
  'DOM Timing : useEffect는 tree가 다 그려진 이후에 실행되는 것임. 따라서 먼저 tree가 다 그려진 component의 useEffect가 실행되므로, 반드시 부모 component의 useEffect가 먼저 실행된다 할 수 없고, 그 반대도 마찬가지';

const acquired2: string =
  'State와 DOM : re-render는 state가 바뀔 때 일어나므로, useRef의 값이 아무리 바뀌어도, state가 바뀐 것이 아니기 때문에 real-dom에 적용되지 않음';
const AcquiredSkills: List[] = [
  {
    subTitle: '새로 배운 것',
    li: ['useEffect ', 'useCallback', acquired, acquired2],
  },
];

const WillAcquireSkills: List[] = [
  {
    subTitle: 'Dependency',
    li: ['useEffect', 'useCallback'],
  },
  {
    subTitle: 'Cycle',
    li: [
      'Real-Dom VS Virtual-Dom',
      'Parent Component VS Children Component',
      'Hooks',
    ],
  },
  {
    subTitle: 'Routing 셋팅 시점이랑 Routing 도는 시점',
    li: ['painting 시점이...'],
  },
];

const RequirementListSection: SectionType = {
  title: '요구사항',
  contents: RequirementList,
};

const AcquiredSkillsSection: SectionType = {
  title: '새로 배운 것',
  contents: AcquiredSkills,
};

const WillAcquirSkillsSection: SectionType = {
  title: '아직 아리송',
  contents: WillAcquireSkills,
};

export const Home = () => {
  const { session } = useSession();
  const navigate = useNavigate();
  console.log('ssss>>>', session);

  return (
    <>
      <header id='home-header' className='p-10 h-full'>
        <h1 className='font-bold text-5xl pb-20 text-zinc-50'>
          DigitalHana路 개발 3기 2차 과제
        </h1>
        {session.user?.id && (
          <button
            onClick={() => navigate('/albums')}
            className=' border-zinc-50 border-2 hover:bg-zinc-50 hover:text-hana text-zinc-50 font-black p-3 pl-5 pr-5 rounded-full'
          >
            My Album
          </button>
        )}
      </header>
      <div className='p-5 mt-10 border-t-2 border-hana'>
        <h1 className='font-extrabold text-4xl mt-10'>
          금융개발 3기 프론트엔드 과제 2
        </h1>

        <h2 className='p-5 mb-20 text-xl font-medium'>2024.02. ~ 2024.03.02</h2>
        {RenderSection(RequirementListSection)}
        {RenderSection(AcquiredSkillsSection)}
        {RenderSection(WillAcquirSkillsSection)}
      </div>
    </>
  );
};
