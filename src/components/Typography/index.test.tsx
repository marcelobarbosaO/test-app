import React from 'react';
import { cleanup, render, waitFor } from '@testing-library/react-native';

import Typography from './index';
import Wrapper from '#Tests/mockProvider';

describe('<Typography />', () => {
  afterEach(cleanup);

  it('Should be render loading', async () => {
    const { queryAllByText } = render(
      <Wrapper>
        <Typography>Teste</Typography>
      </Wrapper>,
    );

    await waitFor(async () => {
      const item = queryAllByText('Teste');

      expect(item.length).toEqual(1);
    });
  });
});
