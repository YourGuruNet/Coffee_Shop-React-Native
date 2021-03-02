import React, {Fragment} from 'react';
import {View, SafeAreaView} from 'react-native';
import ShopsList from './ShopsList';
import MenuTopButtonBar from './MenuTopButtonBar';
import {Container, Button, Text, Title} from 'native-base';
import {baseStyles} from '../../assets/styles';
import * as Animatable from 'react-native-animatable';
const MenuScreen = ({navigation}) => {
  return (
    <Fragment>
      <SafeAreaView style={baseStyles.safeAreaView} />
      <Container style={baseStyles.container}>
        <Animatable.View animation="fadeInLeft" delay={150}>
          <MenuTopButtonBar navigation={navigation} />
        </Animatable.View>
        <Animatable.View animation="fadeInRight" delay={150}>
          <Button
            style={baseStyles.mainButton}
            block
            onPress={() =>
              navigation.navigate('CheckoutPageScreen', {
                title: 'SIA Coffee Shop',
              })
            }>
            <Text style={baseStyles.mainButtonText}>Your favorite order</Text>
          </Button>
        </Animatable.View>
        <Animatable.View
          animation="fadeIn"
          delay={450}
          style={{
            height: 350,
          }}>
          <Title style={baseStyles.heading1}>List view, closest coffee</Title>
          <ShopsList navigation={navigation} />
        </Animatable.View>
        <Animatable.View animation="fadeInRight" delay={150}>
          <Button
            style={baseStyles.mainButton}
            block
            onPress={() => navigation.navigate('MapViewScreen')}>
            <Text style={baseStyles.mainButtonText}>Map View</Text>
          </Button>
        </Animatable.View>
      </Container>
    </Fragment>
  );
};
//

export default MenuScreen;
