import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Transaction from '../screen/Transaction/Transaction';
import DetailTransaction from '../screen/Transaction/DetailTransaction';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Transaction"
        component={Transaction}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailTransaction"
        component={DetailTransaction}
        options={{
          title: 'Detail Transaksi',
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigation;
