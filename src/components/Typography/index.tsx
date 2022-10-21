import React from 'react';

import * as S from './styles';

const Typography = ({ children, ...rest }: S.TypographyProps) => (
  <S.Typography {...rest}>{children}</S.Typography>
);

export default Typography;
