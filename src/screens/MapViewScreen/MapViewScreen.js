import React, {Fragment} from 'react';
import {View, SafeAreaView} from 'react-native';
import Map from './Map';
import {baseStyles} from '../../assets/styles';
import {Container, Button, Text, Content} from 'native-base';

const MapViewScreen = ({navigation}) => {
  return (
    <Fragment>
      <SafeAreaView style={baseStyles.safeAreaView} />
      <Container style={baseStyles.container}>
        <Button
          transparent
          style={baseStyles.goBackButtonContainer}
          onPress={() => navigation.goBack()}>
          <Text style={baseStyles.goBackButtonText}>&#8656;Go Back</Text>
        </Button>
        <View style={baseStyles.mapContainer}>
          <Map />
        </View>
      </Container>
    </Fragment>
  );
};

export default MapViewScreen;
