import React, {Fragment} from 'react';
import {SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {baseStyles} from '../../assets/styles';
import {Container, Button, Text, Title, View, List, Content} from 'native-base';
import CartItem from './CartItem';
const CheckoutPageScreen = ({navigation, cart}) => {
  return (
    <Fragment>
      <SafeAreaView style={baseStyles.safeAreaView} />
      <Container style={baseStyles.container}>
        <Title style={baseStyles.heading2}>Checkout page</Title>
        <View
          style={{
            height: '80%',
            margin: 10,
          }}>
          <Content>
            <List>
              {cart.map((item, id) => {
                return <CartItem key={id} id={id} item={item} />;
              })}
            </List>
          </Content>
        </View>
        <Button
          style={baseStyles.mainButton}
          block
          onPress={() => navigation.navigate('AddPaymentScreen')}>
          <Text style={baseStyles.mainButtonText}>Slide to confirm</Text>
        </Button>
      </Container>
    </Fragment>
  );
};

const mapStateToProps = ({
  shopsListState: {selectedShop, selectedShopProducts, cart},
}) => {
  return {selectedShop, selectedShopProducts, cart};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item, selectedShop, cart) =>
      dispatch(addToCart(item, selectedShop, cart)),
    removeAllItems: () => dispatch(removeAllItems()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPageScreen);
