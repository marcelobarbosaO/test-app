import React from 'react';
import { cleanup, render, waitFor } from '@testing-library/react-native';

import Checkbox from './index';
import Wrapper from '#Tests/mockProvider';

describe('<Checkbox />', () => {
  afterEach(cleanup);

  it('Should be not render icon in checkbox', async () => {
    const { queryAllByTestId } = render(
      <Wrapper>
        <Checkbox active={false} />
      </Wrapper>,
    );

    await waitFor(async () => {
      const item = queryAllByTestId('icon-checkbox');

      expect(item.length).toEqual(0);
    });
  });

  it('Should be render icon in checkbox', async () => {
    const { queryAllByTestId } = render(
      <Wrapper>
        <Checkbox active={true} />
      </Wrapper>,
    );

    await waitFor(async () => {
      const item = queryAllByTestId('icon-checkbox');

      expect(item.length).toEqual(1);
    });
  });
});
