import React from 'react';
import Realm from 'realm';
import { cleanup, render, waitFor } from '@testing-library/react-native';

import mockAxios from '#Tests/mockAxios';
import Wrapper from '#Tests/mockProvider';

import Posts from './index';

const postMock = [{ id: 1, userId: 1, title: 'postagem de teste', body: 'ashaushaushasa' }];

jest.mock('realm');

describe('<Posts />', () => {
  afterEach(cleanup);

  beforeAll(() => {
    mockAxios.reset();
  });

  it('Should be render component with posts', async () => {
    mockAxios.onGet('/posts').reply(200, postMock);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    Realm.open.mockResolvedValue({
      objects: _params => {
        return {
          toJSON: () => jest.fn().mockResolvedValue(postMock),
        };
      },
      write: jest.fn(),
    });

    const { queryAllByText } = render(
      <Wrapper>
        <Posts />
      </Wrapper>,
    );

    await waitFor(() => {
      const item = queryAllByText('postagem de teste');

      expect(item.length).toEqual(2);
    });
  });
});
