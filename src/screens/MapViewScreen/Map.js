import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {StyleSheet, View} from 'react-native';
const Map = () => {
  return (
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
      showsUserLocation={true}></MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map;
