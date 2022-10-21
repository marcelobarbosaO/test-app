import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTab from './BottomTab';

const { Navigator, Screen } = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="bottomtab" component={BottomTab} />
    </Navigator>
  );
};

export default AppRoutes;
