import React from 'react';

import * as S from './styles';

const Checkbox = ({ active }: S.CheckBoxProps) => {
  return (
    <S.Container active={active}>
      {active && <S.Icon testID={'icon-checkbox'} name="check" size={15} />}
    </S.Container>
  );
};

export default Checkbox;
