import React from 'react';

import useTodos, { TodoProps } from '#Hooks/useTodos';
import { Loading, Typography, Checkbox } from '#Components';

import * as S from './styles';

const Todos = () => {
  const { loading, todos } = useTodos();

  const renderItem = ({ item }: { item: TodoProps }) => (
    <S.ContentItem elevation={4} category="medium">
      <Checkbox active={item.completed} />
      <Typography size={18} weight={600} ml={10}>
        {item.title}
      </Typography>
    </S.ContentItem>
  );

  return (
    <S.Container>
      <Loading loading={loading}>
        <S.List data={todos} keyExtractor={(todo: TodoProps) => todo.id} renderItem={renderItem} />
      </Loading>
    </S.Container>
  );
};

export default Todos;
