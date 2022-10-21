/* eslint-disable no-console */
import Realm from 'realm';
import uuid from 'react-native-uuid';

import { TodoProps } from '#Hooks/useTodos';
import { PostProps } from '#Hooks/usePosts';
import { AlbumProps } from '#Hooks/useAlbums';
import { TodoSchema, PostSchema, AlbumSchema } from './schemas';

export const getRealm = async () =>
  await Realm.open({
    path: 'testapp',
    schema: [TodoSchema, PostSchema, AlbumSchema],
    deleteRealmIfMigrationNeeded: true,
  });

export const persistTodos = async (items: TodoResponse[]) => {
  const realm = await getRealm();

  try {
    items.map(item => {
      realm.write(() => {
        realm.create('Todo', {
          _id: uuid.v4(),
          id: item.id,
          userId: item.userId,
          title: item.title,
          completed: item.completed,
        });
      });
    });
  } catch (err) {
    console.log('Houve um erro com o Realm', JSON.stringify(err));
  } finally {
    realm.close();
  }
};

export const persistPosts = async (items: PostResponse[]) => {
  const realm = await getRealm();

  try {
    items.map(item => {
      realm.write(() => {
        realm.create('Post', {
          _id: uuid.v4(),
          id: item.id,
          userId: item.userId,
          title: item.title,
          body: item.body,
        });
      });
    });
  } catch (err) {
    console.log('Houve um erro com o Realm', JSON.stringify(err));
  } finally {
    realm.close();
  }
};

export const persistAlbums = async (items: Response[]) => {
  const realm = await getRealm();

  try {
    items.map(item => {
      realm.write(() => {
        realm.create('Album', {
          _id: uuid.v4(),
          id: item.id,
          userId: item.userId,
          title: item.title,
        });
      });
    });
  } catch (err) {
    console.log('Houve um erro com o Realm', JSON.stringify(err));
  } finally {
    realm.close();
  }
};

export const fetchPostsInDB = async (): Promise<PostProps[]> => {
  const realm = await getRealm();

  const posts: PostProps[] = realm.objects<PostProps[]>('Post').toJSON();

  return posts;
};

export const fetchAlbumsInDB = async (): Promise<AlbumProps[]> => {
  const realm = await getRealm();

  const albums: AlbumProps[] = realm.objects<AlbumProps[]>('Album').toJSON();

  return albums;
};

export const fetchTodosInDB = async (): Promise<TodoProps[]> => {
  const realm = await getRealm();

  const todos: TodoProps[] = realm.objects<TodoProps[]>('Todo').toJSON();

  return todos;
};
