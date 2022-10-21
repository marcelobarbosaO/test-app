import React from 'react';
import { Text } from 'react-native';
import { cleanup, render, waitFor } from '@testing-library/react-native';

import Loading from './index';
import Wrapper from '#Tests/mockProvider';

describe('<Loading />', () => {
  afterEach(cleanup);

  it('Should be render loading', async () => {
    const { queryAllByText } = render(
      <Wrapper>
        <Loading loading={true}>
          <Text>Teste</Text>
        </Loading>
      </Wrapper>,
    );

    await waitFor(async () => {
      const item = queryAllByText('Teste');

      expect(item.length).toEqual(0);
    });
  });

  it('Should be render children text', async () => {
    const { queryAllByText } = render(
      <Wrapper>
        <Loading loading={false}>
          <Text>Teste</Text>
        </Loading>
      </Wrapper>,
    );

    await waitFor(async () => {
      const item = queryAllByText('Teste');

      expect(item.length).toEqual(1);
    });
  });
});
