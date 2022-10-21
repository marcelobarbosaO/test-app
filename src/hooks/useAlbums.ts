import React from 'react';

import { fetchAlbumsInDB, persistAlbums } from '#Databases/realm';
import { getAlbums } from '#Services/albums';

export type AlbumProps = {
  _id?: string;
  id: number;
  userId: number;
  title: string;
};

const useAlbums = () => {
  const [loading, setLoading] = React.useState(false);
  const [albums, setAlbums] = React.useState<AlbumProps[]>([]);

  const fetchAlbumsFromApi = async () => {
    const { data, status } = await getAlbums();

    if (status && data.length > 0) {
      setLoading(false);

      setAlbums(data);

      await persistAlbums(data);
    }
  };

  const fetchAlbumsFromBD = async () => {
    setLoading(true);

    const albums = await fetchAlbumsInDB();

    if (albums.length === 0) return fetchAlbumsFromApi();

    setAlbums(albums);

    setLoading(false);
  };

  React.useEffect(() => {
    fetchAlbumsFromBD();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    albums,
  };
};

export default useAlbums;
