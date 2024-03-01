import { forwardRef, useEffect } from 'react';
import { ForwardedRef } from 'react';
import { useToggle } from '../hooks/toggle';
import { useFetch } from '../hooks/fetch';
import { useParams } from 'react-router-dom';
import { useImperativeHandle, useState } from 'react';
import clsx from 'clsx';

type AlbumHandler = {
  select: (id: number) => void;
};

type Prop = {
  album: Album | null;
  albumId: number | null;
};

const BASE_URL = 'https://jsonplaceholder.typicode.com';
export const Album2 = forwardRef(
  ({ album }: Prop, ref: ForwardedRef<AlbumHandler>) => {
    const [selected, toggle] = useToggle(false);
    const { albumId } = useParams();
    const [data, setData] = useState<Album | null>(null);

    const { data: albumData, isLoading } = useFetch<Album | null>({
      url: `${BASE_URL}/albums?albumId=${albumId}`,
      enable: !!album,
    });

    const albumHandel: AlbumHandler = {
      select: () => {
        toggle();
      },
    };

    useImperativeHandle(ref, () => albumHandel);

    useEffect(() => {
      if (!album && albumData) {
        setData(albumData);
      }
      if (album) {
        setData(album);
      }
    }, [albumData]);

    return (
      <>
        <div
          className={clsx({
            'border-b-2 border-hanared': selected,
          })}
        >
          {data?.title}
          {isLoading && `isLoading`}
        </div>
      </>
    );
  }
);
Album2.displayName = 'Album';
