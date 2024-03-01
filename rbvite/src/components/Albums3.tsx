// import { useState, useRef } from 'react';
// import { useSession } from '../contexts/session.context';
// import { useFetch } from '../hooks/fetch';
// import { useNavigate } from 'react-router-dom';
// import { Album4 } from './Album4';

// const BASE_URL = 'https://jsonplaceholder.typicode.com';
// export const Albums = () => {
//   const {
//     session: { user: loginUser },
//   } = useSession();

//   const { data: albums, isLoading } = useFetch<Album[]>({
//     url: `${BASE_URL}/albums?userId=${loginUser?.id}`,
//     dependency: [loginUser],
//     enable: !(loginUser === null),
//   });

//   const [selected, setSelected] = useState<number | null>(null);
//   const navigate = useNavigate();

//   const albumRef = useRef<boolean>();

//   const goTo = (id: number | null) => {
//     if (id) {
//       setSelected(id);
//       console.log('lllllll', id);
//       navigate(`/albums/${id}   `);
//       return;
//     }
//   };

//   return (
//     <>
//       {loginUser && isLoading ? <h1>isLoading...</h1> : null}
//       {albums ? (
//         <ul>
//           {albums?.map((item) => (
//             <li key={item.id}>
//               <button onClick={albumHandler}>
//                 <Album4 album={item} albumId={item.id} ref={}/>
//               </button>
//             </li>
//           ))}
//         </ul>
//       ) : null}
//       <button
//         onClick={() => goTo(selected)}
//         className='bg-hana rounded text-zinc-50 pl-5 pr-5  hover:bg-blue-400'
//       >
//         Details
//       </button>
//     </>
//   );
// };
