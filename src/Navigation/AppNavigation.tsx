import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Transaction from '../screen/Transaction/Transaction';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Transaction"
        component={Transaction}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
