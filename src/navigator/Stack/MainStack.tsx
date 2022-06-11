import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, GlobleData, Countries} from '../../screen';
const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',

        headerStyle: {
          backgroundColor: '#ffffff',
          shadowColor: 'transparent',
          elevation: 0,
        },
        headerTitleStyle: {
          fontSize: 18,
          color: '#000000',
        },
        gestureEnabled: false,
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Top 5 Countries',
        }}
      />
      <Stack.Screen
        name="GlobleData"
        component={GlobleData}
        options={{
          title: 'Globle Data',
        }}
      />
      <Stack.Screen
        name="Countries"
        component={Countries}
        options={{
          title: 'Countries',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
