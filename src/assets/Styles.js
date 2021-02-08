import {StyleSheet} from 'react-native';
import {DefaultTheme} from '@react-navigation/native';

export const styles = StyleSheet.create({
  textView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
    paddingVertical: 10,
    color: '#042037',
  },
  appButtonContainer: {
    backgroundColor: '#042037',
    paddingVertical: 10,
    paddingHorizontal: 25,
    elevation: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  appButtonText: {
    color: '#728DA5',
    fontSize: 15,
  },
});

export const AppBodyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#2A4F6E',
  },
};

export const AppBarTheme = {
  headerStyle: {
    backgroundColor: '#042037',
  },
  headerTintColor: '#728DA5',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
