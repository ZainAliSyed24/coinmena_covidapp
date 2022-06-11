import React, {forwardRef} from 'react';
import {MainStack} from './Stack';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const rootNavigator = forwardRef((props, ref) => (
  <NavigationContainer ref={ref}>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="MainStack"
        component={MainStack}
        options={{
          animationEnabled: false,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
));

export default rootNavigator;
