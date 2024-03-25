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
      'API는 jsonplaceholder 사용',
      '로그인된 사용자는 useReducer, useContext 사용',
      '앨범 목록은 현재 로그인된 User의 앨범들이며, 이 앨범들을 대상으로 앨범 선태 후 앨범 상세보기 클릭시 선택된 앨범의 상세(사진보기)화면으로 이동. (앨범은 하나만 선액)',
      '페이지 전환은 react-router-dom 사용',
      '상세(사진보기)화면에서는 사진의 thumbnailUrl에 해당하는 이미지로 보여주세요',
      '새로고침 했을 때, 해당 앨범의 이미지를 그대로 다시 보여주세요',
      '간결하고 심플하게 코딩하여 가독성 좋은 코드를 작성하세요',
      'UI디자인 보다는 기능(UX)에 완성하여 집중하고 버그가 없도록 작성하세요',
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
