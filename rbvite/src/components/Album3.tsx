// import {
//   ForwardedRef,
//   createRef,
//   forwardRef,
//   useEffect,
//   useImperativeHandle,
//   useState,
// } from 'react';
// import { useFetch } from '../hooks/fetch';
// import { useToggle } from '../hooks/toggle';
// import clsx from 'clsx';

// type Prop = {
//   album: Album | null;
//   albumId: number | null;
// };
// export const Album3 = forwardRef(
//   ({ album, albumId }: Prop, ref: ForwardedRef<AlbumHandler>) => {
//     const { data: albumData } = useFetch<Album | null>({
//       url: `${BASE_URL}/albums?albumId=${albumId ?? ''}`,
//       enable: !album,
//     });
//     const [data, setData] = useState<Album | null>(null);
//     const [selected, toggle] = useToggle(false);

//     // const buttonRef = useRef<HTMLButtonElement>();
//     const buttonRef = createRef<HTMLButtonElement>();

//     useEffect(() => {
//       if (!album && albumData) {
//         setData(albumData);
//       }

//       if (album) {
//         setData(album);
//       }
//     }, [albumData, album]);

//     const handler = {
//       select: () => {
//         if (buttonRef.current?.click) toggle();
//       },
//     };

//     useImperativeHandle(ref, () => handler);

//     return (
//       <>
//         <div
//           className={clsx({
//             'border-b-2 border-hanared': selected,
//           })}
//         >
//           {data && (
//             <button onClick={() => handler.select()} ref={buttonRef}>
//               {data?.id}
//             </button>
//           )}
//         </div>
//       </>
//     );
//   }
// );

// Album3.displayName = 'Album3';
