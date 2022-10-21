import React from 'react';
import Realm from 'realm';
import { cleanup, render, waitFor } from '@testing-library/react-native';

import mockAxios from '#Tests/mockAxios';
import Wrapper from '#Tests/mockProvider';

import Albums from './index';

const albumMock = [{ id: 1, userId: 1, title: 'Album de teste' }];

jest.mock('realm');

describe('<Albums />', () => {
  afterEach(cleanup);

  beforeAll(() => {
    mockAxios.reset();
  });

  it('Should be render component with posts', async () => {
    mockAxios.onGet('/albums').reply(200, albumMock);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    Realm.open.mockResolvedValue({
      objects: _params => {
        return {
          toJSON: () => jest.fn().mockResolvedValue(albumMock),
        };
      },
      write: jest.fn(),
    });

    const { queryAllByText } = render(
      <Wrapper>
        <Albums />
      </Wrapper>,
    );

    await waitFor(async () => {
      const item = queryAllByText('Album de teste');

      expect(item.length).toEqual(1);
    });
  });
});
