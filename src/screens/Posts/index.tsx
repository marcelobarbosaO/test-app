import React from 'react';

import usePosts, { PostProps } from '#Hooks/usePosts';
import { Loading, Typography } from '#Components';

import * as S from './styles';

const Posts = () => {
  const { loading, posts } = usePosts();

  const renderItem = ({ item }: { item: PostProps }) => (
    <S.ContentItem elevation={4} category="medium">
      <Typography size={18} mb={15} weight={600}>
        {item.title}
      </Typography>
      <Typography size={12}>{item.title}</Typography>
    </S.ContentItem>
  );

  return (
    <S.Container>
      <Loading loading={loading}>
        <S.List data={posts} keyExtractor={(post: PostProps) => post.id} renderItem={renderItem} />
      </Loading>
    </S.Container>
  );
};

export default Posts;
