import React, {Fragment} from 'react';
import {View, SafeAreaView} from 'react-native';
import Map from './Map';
import {baseStyles} from '../../assets/styles';
import {Container, Button, Text, Title} from 'native-base';
import MapCardSlider from './MapCardSlider';
import * as Animatable from 'react-native-animatable';

const MapViewScreen = ({navigation}) => {
  return (
    <Fragment>
      <SafeAreaView style={baseStyles.safeAreaView} />
      <Container style={baseStyles.container}>
        <Animatable.View animation="fadeInLeft" delay={350}>
          <Button
            transparent
            style={baseStyles.goBackButtonContainer}
            onPress={() => navigation.goBack()}>
            <Text style={baseStyles.goBackButtonText}>&#8656;Go Back</Text>
          </Button>
        </Animatable.View>
        <Animatable.View animation="fadeInRight" delay={350}>
          <Title style={baseStyles.heading1}>Find your closest coffee</Title>
        </Animatable.View>
        <Animatable.View
          animation="fadeIn"
          delay={350}
          style={baseStyles.mapContainer}>
          <Map />
        </Animatable.View>
        <Animatable.View animation="fadeInLeft" delay={350}>
          <MapCardSlider navigation={navigation} />
        </Animatable.View>
      </Container>
    </Fragment>
  );
};

export default MapViewScreen;
