import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import ShopsList from './ShopsList';
import MenuTopButtonBar from './MenuTopButtonBar';

const MenuScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.MenuTopButtonBarView}>
        <MenuTopButtonBar navigation={navigation} />
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate('CheckoutPageScreen', {
            title: 'SIA Coffee Shop',
          })
        }
        style={styles.bigMainButtonContainer}>
        <Text style={styles.bigMainButtonText}>Your favorite order</Text>
      </TouchableOpacity>
      <View
        style={{
          height: 350,
        }}>
        <Text style={styles.subHeaderText}>List view, closest coffee</Text>
        <ShopsList navigation={navigation} />
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('MapViewScreen')}
        style={styles.bigMainButtonContainer}>
        <Text style={styles.bigMainButtonText}>MAP VIEW</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MenuTopButtonBarView: {
    height: 60,
  },
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
  bigMainButtonContainer: {
    backgroundColor: 'black',
    paddingVertical: 20,
    alignSelf: 'stretch',
    marginVertical: 10,
    marginHorizontal: 40,
    elevation: 8,
    borderRadius: 8,
  },
  bigMainButtonText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default MenuScreen;
