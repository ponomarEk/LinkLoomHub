import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { BackButton, DataStatusLayout, RouteHeader } from '..';
import useFetchData from '../../hooks/useFetchData';
import AlbumService from '../../services/albumService';
import AlbumCard from './AlbumCard';

const AlbumsList = () => {
  const { userID } = useParams();
  const getAlbumsByUserId = useCallback(() => AlbumService.getAlbumsByUserId(userID), [userID]);
  const { isLoading, data: albums, error } = useFetchData(getAlbumsByUserId);

  return (
    <section className="container mx-auto p-8">
      <BackButton />
      <RouteHeader headerName={`Albums list for user: ${userID}`} />
      <DataStatusLayout isLoading={isLoading} error={error} dataLength={albums?.length}>
        {!!albums?.length && (
          <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {albums.map(album => (
              <AlbumCard key={album.id} {...album} />
            ))}
          </ul>
        )}
      </DataStatusLayout>
    </section>
  );
};

export default AlbumsList;
