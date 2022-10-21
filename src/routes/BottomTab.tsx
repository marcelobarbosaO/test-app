import React from 'react';
import { Text } from 'react-native';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { MaterialIcons, Entypo, AntDesign } from '@expo/vector-icons';

import { isIOS } from '#Utils';

import Posts from '#Screens/Posts';
import Albums from '#Screens/Albums';
import Todos from '#Screens/Todos';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTab = () => {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.COLORS.PRIMARY,
        tabBarInactiveTintColor: theme.COLORS.SUBTEXT,
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          paddingVertical: isIOS ? 5 : 0,
          height: getBottomSpace() + 50,
        },
      }}
    >
      <Screen
        name="Posts"
        component={Posts}
        options={{
          tabBarLabel: ({ color }) => <Text style={{ fontSize: 12, color }}>Postagens</Text>,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="library-books" color={color} size={size} />
          ),
        }}
      />
      <Screen
        name="Albums"
        component={Albums}
        options={{
          tabBarLabel: ({ color }) => <Text style={{ fontSize: 12, color }}>Albuns</Text>,
          tabBarIcon: ({ color, size }) => <Entypo name="images" color={color} size={size} />,
        }}
      />
      <Screen
        name="Todos"
        component={Todos}
        options={{
          tabBarLabel: ({ color }) => <Text style={{ fontSize: 12, color }}>TO-DOs</Text>,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="checksquare" color={color} size={size} />
          ),
        }}
      />
    </Navigator>
  );
};

export default BottomTab;
