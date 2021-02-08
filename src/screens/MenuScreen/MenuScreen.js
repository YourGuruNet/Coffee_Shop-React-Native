import React from 'react';
import {Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import {styles} from '../../assets/Styles';
import ShopsList from './ShopsList';
import MenuTopButtonBar from './MenuTopButtonBar';

const MenuScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View
        style={{
          height: 60,
        }}>
        <MenuTopButtonBar navigation={navigation} />
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate('ShopCardScreen', {
            title: 'SIA Coffee Shop ',
          })
        }
        style={styles.bigMainButton}>
        <Text style={styles.appButtonText}>Your favorite order</Text>
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
        style={styles.bigMainButton}>
        <Text style={styles.appButtonText}>MAP VIEW</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MenuScreen;
