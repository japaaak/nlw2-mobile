import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { useSafeArea } from 'react-native-safe-area-context';
import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const { Screen, Navigator } = createBottomTabNavigator();

export default function StudyTabs() {
  const insets = useSafeArea();

  return (
    <Navigator
      tabBarOptions={{
        safeAreaInsets: { bottom: 0, top: 0 },
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64 + insets.bottom / 2,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: insets.bottom,
        },
        iconStyle: {
          flex: 0,
          width: 22,
          height: 22,
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d',
      }}
    >
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="ios-easel"
              size={size}
              color={focused ? '#8257e5' : color}
            />
          ),
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="ios-heart"
              size={size}
              color={focused ? '#8257e5' : color}
            />
          ),
        }}
      />
    </Navigator>
  );
}
