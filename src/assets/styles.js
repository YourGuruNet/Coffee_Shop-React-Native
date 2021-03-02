import {StyleSheet} from 'react-native';

// Main color roots
export const baseColorLight = '#7C83AF';
export const baseColorDark = '#080F3A';
export const heightProportion = '80%';
// Base styles for app
export const baseStyles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: baseColorLight,
  },
  heading1: {
    fontSize: 25,
    color: baseColorDark,
  },
  heading2: {
    fontSize: 20,
    color: baseColorDark,
  },
  heading3: {
    fontSize: 15,
    color: baseColorDark,
  },

  container: {
    backgroundColor: baseColorLight,
  },

  //Buttons
  mainButton: {
    backgroundColor: baseColorDark,
    marginTop: 30,
    marginHorizontal: 30,
    borderRadius: 8,
    borderBottomEndRadius: 0,
    borderTopLeftRadius: 0,
  },

  mainButtonText: {
    color: baseColorLight,
    fontSize: 22,
  },
  mainSmallButton: {
    backgroundColor: baseColorDark,
  },

  addToCardButton: {
    padding: 2,
    backgroundColor: baseColorDark,
  },
  addToCardButtonText: {
    padding: 4,
    fontSize: 13,
    color: baseColorLight,
  },

  goBackButtonContainer: {
    alignSelf: 'flex-start',
    padding: 10,
  },
  goBackButtonText: {
    textAlign: 'center',
    fontSize: 18,
    color: baseColorDark,
    paddingLeft: 0,
  },

  //ShopCardFilterButtons

  filterButtonListItem: {
    borderColor: 'transparent',
    marginLeft: 0,
    padding: 0,
  },

  //ShopCardFilterScreen
  coffeeSizesButton: {
    fontSize: 20,
    color: baseColorDark,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 4,
    borderColor: baseColorDark,
    borderWidth: 1,
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

  //Menu screen
  menuTopButtonBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  menuListContainer: {
    marginRight: 15,
  },

  menuListItem: {
    borderColor: baseColorDark,
  },

  // Map view
  mapContainer: {
    margin: 10,

    height: '50%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: baseColorLight,
    borderColor: baseColorDark,
    borderWidth: 2,
  },

  //Card item
  card: {
    padding: 8,
    backgroundColor: '#4D658D',
    borderColor: baseColorDark,
  },
  cardListItem: {
    paddingTop: 2,
    paddingBottom: 2,
    justifyContent: 'center',
    borderColor: 'transparent',
  },
  cardForm: {
    borderColor: baseColorDark,
    color: baseColorDark,
  },
});
