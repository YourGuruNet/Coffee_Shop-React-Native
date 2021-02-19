import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {StyleSheet} from 'react-native';
const Map = () => {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      showsUserLocation={true}>
      <Marker
        coordinate={{
          latitude: 56.948585716433456,
          longitude: 24.121472517697782,
        }}
        title="Flatiron School Atlanta"
        description="This is where the magic happens!"></Marker>
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map;
