import React from 'react';

import { fetchPostsInDB, persistPosts } from '#Databases/realm';
import { getPosts } from '#Services/posts';

export type PostProps = {
  _id?: string;
  id: number;
  userId: number;
  title: string;
  body: string;
};

const usePosts = () => {
  const [loading, setLoading] = React.useState(false);
  const [posts, setPosts] = React.useState<PostProps[]>([]);

  const fetchPostsFromApi = async () => {
    const { data, status } = await getPosts();

    if (status && data.length > 0) {
      setLoading(false);

      setPosts(data);

      await persistPosts(data);
    }
  };

  const fetchPosts = async () => {
    setLoading(true);

    const tasks = await fetchPostsInDB();

    if (tasks.length === 0) return fetchPostsFromApi();

    setPosts(tasks);

    setLoading(false);
  };

  React.useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    posts,
  };
};

export default usePosts;
