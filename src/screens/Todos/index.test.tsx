import React from 'react';
import Realm from 'realm';
import { cleanup, render, waitFor } from '@testing-library/react-native';

import mockAxios from '#Tests/mockAxios';
import Wrapper from '#Tests/mockProvider';

import Todos from './index';

const todoMock = [{ id: 1, userId: 1, title: 'todo de teste', completed: false }];

jest.mock('realm');

describe('<Albums />', () => {
  afterEach(cleanup);

  beforeAll(() => {
    mockAxios.reset();
  });

  it('Should be render component with todos', async () => {
    mockAxios.onGet('/todos').reply(200, todoMock);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    Realm.open.mockResolvedValue({
      objects: _params => {
        return {
          toJSON: () => jest.fn().mockResolvedValue(todoMock),
        };
      },
      write: jest.fn(),
    });

    const { queryAllByText } = render(
      <Wrapper>
        <Todos />
      </Wrapper>,
    );

    await waitFor(async () => {
      const item = queryAllByText('todo de teste');

      expect(item.length).toEqual(1);
    });
  });
});
