import React, {useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {baseColorDark} from '../../assets/styles';

const Map = ({shopsList}) => {
  const [region, setRegion] = useState({
    latitude: 56.94822111842025,
    longitude: 24.120130859938694,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      region={region}
      onRegionChangeComplete={(region) => setRegion(region)}
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
            description={item._data.description}
            pinColor={baseColorDark}></Marker>
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
