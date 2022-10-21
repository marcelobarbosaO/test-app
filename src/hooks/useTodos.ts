import React from 'react';

import { fetchTodosInDB, persistTodos } from '#Databases/realm';
import { getTodos } from '#Services/todos';

export type TodoProps = {
  _id?: string;
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

const useTodos = () => {
  const [loading, setLoading] = React.useState(false);
  const [todos, setTodos] = React.useState<TodoProps[]>([]);

  const fetchTodosFromApi = async () => {
    const { data, status } = await getTodos();

    if (status && data.length > 0) {
      setLoading(false);

      setTodos(data);

      await persistTodos(data);
    }
  };

  const fetchTodosFromBD = async () => {
    setLoading(true);

    const todos = await fetchTodosInDB();

    if (todos.length === 0) return fetchTodosFromApi();

    setTodos(todos);

    setLoading(false);
  };

  React.useEffect(() => {
    fetchTodosFromBD();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    todos,
  };
};

export default useTodos;
