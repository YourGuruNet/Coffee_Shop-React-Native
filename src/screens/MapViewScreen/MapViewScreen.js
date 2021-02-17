import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import Map from './Map';

const MapViewScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.textView}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}>
          <Text style={styles.goBackButtonText}>&#8656; Go Back</Text>
        </TouchableOpacity>
        <View style={styles.container}>
          <Map />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 50,
    margin: 10,
    height: 700,

    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textView: {},

  goBackButtonText: {
    padding: 5,
    fontSize: 17,
  },
});

export default MapViewScreen;
