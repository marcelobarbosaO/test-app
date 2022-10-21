import React from 'react';

import useAlbums, { AlbumProps } from '#Hooks/useAlbums';
import { Loading, Typography } from '#Components';

import * as S from './styles';

const Albums = () => {
  const { loading, albums } = useAlbums();

  const renderItem = ({ item }: { item: AlbumProps }) => (
    <S.ContentItem elevation={4} category="medium">
      <Typography size={18} weight={600}>
        {item.title}
      </Typography>
    </S.ContentItem>
  );

  return (
    <S.Container>
      <Loading loading={loading}>
        <S.List
          data={albums}
          keyExtractor={(album: AlbumProps) => album.id}
          renderItem={renderItem}
        />
      </Loading>
    </S.Container>
  );
};

export default Albums;
