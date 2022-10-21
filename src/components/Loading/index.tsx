import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from './styles';

type LoadingProps = {
  loading: boolean;
  background?: string;
  children: React.ReactNode;
};

const Loading: React.FC<LoadingProps> = ({ loading, children, background }): JSX.Element => {
  if (loading)
    return (
      <Container background={background}>
        <ActivityIndicator size="large" color={background ? '#FFF' : '#000'} />
      </Container>
    );

  return <>{children}</>;
};

export default Loading;
