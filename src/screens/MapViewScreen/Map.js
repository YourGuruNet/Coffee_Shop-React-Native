import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';

const Map = ({shopsList}) => {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      showsUserLocation={true}
      showsMyLocationButton={true}>
      {shopsList.map((item, id) => {
        return (
          <Marker
            key={id}
            coordinate={{
              latitude: item._data.coordinate.latitude,
              longitude: item._data.coordinate.longitude,
            }}
            title={item._data.title}
            description={item._data.description}></Marker>
        );
      })}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const mapStateToProps = ({shopsListState: {shopsList}}) => {
  return {shopsList};
};

export default connect(mapStateToProps)(Map);
