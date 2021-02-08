import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  textView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
    paddingVertical: 10,
    color: 'black',
  },
  subHeaderText: {
    fontSize: 25,
    paddingVertical: 10,
    color: 'black',
    textAlign: 'center',
  },
  bigMainButton: {
    backgroundColor: 'black',
    paddingVertical: 20,
    alignSelf: 'stretch',
    marginVertical: 10,
    marginHorizontal: 40,
    elevation: 8,
    borderRadius: 8,
  },

  appButtonText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },

  goBackButtonText: {
    fontSize: 17,
  },

  menuTopButtonBarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  menuTopButtonBarButton: {
    backgroundColor: 'black',
    paddingVertical: 20,
    paddingHorizontal: 30,
    elevation: 8,
    marginHorizontal: 2,
  },

  MenuTopButtonBarText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});
