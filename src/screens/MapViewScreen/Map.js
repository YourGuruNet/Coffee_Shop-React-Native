import React, {useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {baseColorDark} from '../../assets/styles';

const Map = ({showShopInMap}) => {
  const [region, setRegion] = useState({
    latitude: 56.94822111842025,
    longitude: 24.120130859938694,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  console.log(showShopInMap);
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      region={region}
      onRegionChangeComplete={(region) => setRegion(region)}
      style={styles.map}
      showsUserLocation={true}
      showsMyLocationButton={true}>
      {showShopInMap.coordinate ? (
        <Marker
          coordinate={{
            latitude: showShopInMap.coordinate.latitude,
            longitude: showShopInMap.coordinate.longitude,
          }}
          pinColor={baseColorDark}></Marker>
      ) : null}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const mapStateToProps = ({shopsListState: {showShopInMap}}) => {
  return {showShopInMap};
};

export default connect(mapStateToProps)(Map);
