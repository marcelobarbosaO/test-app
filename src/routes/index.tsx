import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Loading } from '#Components';

import AppRoutes from './app.routes';

const Routes = () => {
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Loading loading={loading}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </Loading>
  );
};

export default Routes;
