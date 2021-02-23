import {StyleSheet} from 'react-native';

// Main color roots
export const baseColorLight = '#7C83AF';
export const baseColorDark = '#080F3A';

// Base styles for app
export const baseStyles = StyleSheet.create({
  heading1: {
    fontSize: 25,
    color: baseColorDark,
  },

  container: {
    backgroundColor: baseColorLight,
  },

  mainButton: {
    backgroundColor: baseColorDark,
    margin: 30,
    borderRadius: 8,
    borderBottomEndRadius: 0,
    borderTopLeftRadius: 0,
  },

  mainButtonText: {
    color: baseColorLight,
    fontSize: 22,
  },

  // Login page styles
  loginForm: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
  },

  loginFormLabel: {
    color: baseColorDark,
  },

  loginFormInput: {
    borderColor: baseColorDark,
  },
});
