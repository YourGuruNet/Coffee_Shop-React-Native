import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
//import {Map} from './Map';

const MapViewScreen = ({navigation}) => {
  return (
    <View style={styles.textView}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
        <Text style={styles.goBackButtonText}>&#8656; Go Back</Text>
      </TouchableOpacity>
      <Text>Map Screen</Text>
      {/*<Map />*/}
    </View>
  );
};

const styles = StyleSheet.create({
  textView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  goBackButtonText: {
    fontSize: 17,
  },
});

export default MapViewScreen;
