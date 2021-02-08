import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ContactUsScreen from './src/screens/ContactUsScreen';
import {AppBodyTheme, AppBarTheme} from './src/assets/Styles';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={AppBodyTheme}>
      <Stack.Navigator initialRouteName="Home" screenOptions={AppBarTheme}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Contact Us" component={ContactUsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
