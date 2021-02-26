import React, {Fragment} from 'react';
import {TouchableOpacity, View, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import ShopCardFilterButtons from './ShopCardFilterButtons';
import {
  Container,
  Button,
  Text,
  Content,
  List,
  ListItem,
  Body,
  Title,
  Thumbnail,
} from 'native-base';
import {baseStyles} from '../../assets/styles';
import coffeePicture from '../../assets/images/coffee.png';
import {
  addToCart,
  removeAllItems,
} from '../../components/reducer/ShopListActions';

const ShopCardScreen = ({
  navigation,
  selectedShop,
  selectedShopProducts,
  addToCart,
  cart,
  removeAllItems,
}) => {
  console.log(cart);
  // get unique countries
  const countryList = selectedShop._data.products.map((item) => {
    return item.productCountry;
  });
  // add all
  const newCountryList = ['All', ...countryList];

  const uniqueCountryList = [...new Set(newCountryList)];

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
        <Title style={baseStyles.heading1}>{selectedShop._data.title}</Title>
        <Title style={baseStyles.heading3}>Choose by origin</Title>
        <View>
          <ShopCardFilterButtons uniqueCountryList={uniqueCountryList} />
        </View>
        <View
          style={{
            height: 350,
          }}>
          <Content>
            <List style={baseStyles.menuListContainer}>
              {selectedShopProducts.map((item, id) => {
                return (
                  <ListItem style={baseStyles.menuListItem} key={id}>
                    <Thumbnail source={coffeePicture} />
                    <Body>
                      <Text style={baseStyles.heading2}>
                        {item.productName}
                      </Text>
                    </Body>
                    <View>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={baseStyles.coffeeSizesButton}>S</Text>
                        <Text style={baseStyles.coffeeSizesButton}>M</Text>
                        <Text style={baseStyles.coffeeSizesButton}>L</Text>
                      </View>
                      <TouchableOpacity
                        style={baseStyles.addToCardButton}
                        onPress={() => addToCart(item, selectedShop, cart)}>
                        <Text style={baseStyles.addToCardButtonText}>
                          Add to cart
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </ListItem>
                );
              })}
            </List>
          </Content>
        </View>
        {cart <= 0 ? (
          <Button
            disabled
            style={baseStyles.mainButton}
            block
            onPress={() =>
              navigation.navigate('CheckoutPageScreen', {title: 'test'})
            }>
            <Text style={baseStyles.mainButtonText}>
              No products in the cart
            </Text>
          </Button>
        ) : (
          <Button
            style={baseStyles.mainButton}
            block
            onPress={() =>
              navigation.navigate('CheckoutPageScreen', {title: 'test'})
            }>
            <Text style={baseStyles.mainButtonText}>Proceed to checkout</Text>
          </Button>
        )}
        {cart <= 0 ? (
          <Text />
        ) : (
          <Button
            style={baseStyles.mainButton}
            block
            onPress={() => removeAllItems()}>
            <Text style={baseStyles.mainButtonText}>Clear cart</Text>
          </Button>
        )}
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

export default connect(mapStateToProps, mapDispatchToProps)(ShopCardScreen);
