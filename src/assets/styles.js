import {StyleSheet} from 'react-native';

// Main color roots
export const baseColorLight = '#FFF0AA';
export const baseColorDark = '#554600';
export const baseColorLight2 = '#41837E';
export const baseColorDark2 = '#0D4E49';
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
    backgroundColor: baseColorDark2,
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

  mapCardButtonLeft: {
    backgroundColor: baseColorDark2,
    borderRadius: 8,
    borderBottomStartRadius: 0,
  },

  mapCardButtonLeftText: {
    color: baseColorLight,
    fontSize: 18,
  },
  mapCardButtonRight: {
    marginLeft: 10,
    backgroundColor: baseColorLight,
    borderRadius: 8,
    borderBottomEndRadius: 0,
  },

  mapCardButtonRightText: {
    color: baseColorDark2,
    fontSize: 18,
  },
  mainSmallButton: {
    backgroundColor: baseColorDark2,
  },

  addToCardButton: {
    padding: 2,
    backgroundColor: baseColorDark2,
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
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  mapContainer: {
    margin: 10,
    height: '50%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: baseColorLight,
    borderColor: baseColorDark,
    borderWidth: 2,
  },

  // Callout bubble
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: baseColorLight,
    borderRadius: 6,
    borderColor: baseColorDark,
    borderWidth: 0.5,
    padding: 8,
  },
  // Arrow below the bubble
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: baseColorLight,
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },
  // Character name
  name: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  markerLogo: {
    alignSelf: 'center',
  },

  mapCardSliderContainer: {
    margin: 10,
  },

  //Card item
  card: {
    padding: 8,
    backgroundColor: baseColorLight2,
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
