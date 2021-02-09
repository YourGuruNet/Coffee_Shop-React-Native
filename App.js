import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MenuScreen from './src/screens/MenuScreen/MenuScreen';
import MapViewScreen from './src/screens/MapViewScreen/MapViewScreen';
import AddPaymentScreen from './src/screens/AddPaymentScreen/AddPaymentScreen';
import ShopCardScreen from './src/screens/ShopCardScreen/ShopCardScreen';
import CheckoutPageScreen from './src/screens/CheckoutPageScreen/CheckoutPageScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen" headerMode="none">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="MenuScreen" component={MenuScreen} />
        <Stack.Screen name="MapViewScreen" component={MapViewScreen} />
        <Stack.Screen name="AddPaymentScreen" component={AddPaymentScreen} />
        <Stack.Screen name="ShopCardScreen" component={ShopCardScreen} />
        <Stack.Screen
          name="CheckoutPageScreen"
          component={CheckoutPageScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
