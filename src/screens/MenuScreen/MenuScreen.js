import React, {Fragment} from 'react';
import {View, SafeAreaView} from 'react-native';
import ShopsList from './ShopsList';
import MenuTopButtonBar from './MenuTopButtonBar';
import {Container, Button, Text, Title} from 'native-base';
import {baseStyles} from '../../assets/styles';

const MenuScreen = ({navigation}) => {
  return (
    <Fragment>
      <SafeAreaView style={baseStyles.safeAreaView} />
      <Container style={baseStyles.container}>
        <MenuTopButtonBar navigation={navigation} />
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
        <View
          style={{
            height: 350,
          }}>
          <Title style={baseStyles.heading1}>List view, closest coffee</Title>
          <ShopsList navigation={navigation} />
        </View>
        <Button
          style={baseStyles.mainButton}
          block
          onPress={() => navigation.navigate('MapViewScreen')}>
          <Text style={baseStyles.mainButtonText}>Map View</Text>
        </Button>
      </Container>
    </Fragment>
  );
};
//

export default MenuScreen;
