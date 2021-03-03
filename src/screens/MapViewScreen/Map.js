import React, {useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {connect} from 'react-redux';
import {baseStyles} from '../../assets/styles';

import logo from '../../assets/images/logo.jpg';
import {Thumbnail} from 'native-base';
import {View, Text} from 'react-native';
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
      style={baseStyles.map}
      showsUserLocation={true}
      showsMyLocationButton={true}>
      {showShopInMap.coordinate ? (
        <Marker
          coordinate={{
            latitude: showShopInMap.coordinate.latitude,
            longitude: showShopInMap.coordinate.longitude,
          }}>
          <View>
            <View style={baseStyles.bubble}>
              <Thumbnail source={logo} style={baseStyles.markerLogo} />
              <Text style={baseStyles.name}>{showShopInMap.title}</Text>
            </View>
            <View style={baseStyles.arrowBorder} />
            <View style={baseStyles.arrow} />
          </View>
        </Marker>
      ) : null}
    </MapView>
  );
};

const mapStateToProps = ({shopsListState: {showShopInMap}}) => {
  return {showShopInMap};
};

export default connect(mapStateToProps)(Map);
