import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();

import { Dashboard } from '../screens/Dashboard';
import { Register } from '../screens/Register';

import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          height: 88,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        }
      }}
    >
      <Screen
        component={Dashboard}
        name="Listagem"
        options={{
          tabBarIcon: (({size, color}) =>
            <MaterialIcons
              color={color}
              name="format-list-bulleted"
              size={size}
            />
          )
        }}
      />

      <Screen
        component={Register}
        name="Cadastrar"
        options={{
          tabBarIcon: (({size, color}) =>
            <MaterialIcons
              color={color}
              name="attach-money"
              size={size}
            />
          )
        }}
      />

      <Screen
        component={Register}
        name="Resumo"
        options={{
          tabBarIcon: (({size, color}) =>
            <MaterialIcons
              color={color}
              name="pie-chart"
              size={size}
            />
          )
        }}
      />
    </Navigator>
  )
}
