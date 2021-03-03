import React from 'react';
import {
  Title,
  Card,
  ListItem,
  Text,
  Body,
  View,
  Thumbnail,
  Button,
  Textarea,
  Form,
  Item,
} from 'native-base';
import {baseColorDark, baseStyles} from '../../assets/styles';
import coffeePicture from '../../assets/images/coffee.png';
import {connect} from 'react-redux';
import {increaseAmount} from '../../components/reducer/ShopListActions';

const CartItem = ({item, cart, id}) => {
  return (
    <Card style={baseStyles.card}>
      <Title style={baseStyles.heading2}>{item.selectedShop}</Title>
      <ListItem style={baseStyles.menuListItem}>
        <Thumbnail source={coffeePicture} />
        <Body>
          <Text style={baseStyles.heading2}>{item.productName}</Text>
        </Body>
        <View style={{flexDirection: 'row'}}>
          <Text style={baseStyles.coffeeSizesButton}>S</Text>
          <Text style={baseStyles.coffeeSizesButton}>M</Text>
          <Text style={baseStyles.coffeeSizesButton}>L</Text>
        </View>
      </ListItem>
      {/* Quantity*/}
      <ListItem style={baseStyles.cardListItem}>
        <Title style={baseStyles.heading2}>Quantity</Title>
        <Button transparent>
          <Text style={baseStyles.mainButtonText}>-</Text>
        </Button>
        <Title style={baseStyles.heading2}>{item.quantity}</Title>
        <Button transparent onPress={() => increaseAmount(item)}>
          <Text style={baseStyles.mainButtonText}>+</Text>
        </Button>
      </ListItem>
      {/* Sugar  */}
      <ListItem style={baseStyles.cardListItem}>
        <Title style={baseStyles.heading2}>Sugar</Title>
        <Button transparent>
          <Text style={baseStyles.mainButtonText}>-</Text>
        </Button>
        <Title style={baseStyles.heading2}>{item.sugar}</Title>
        <Button transparent>
          <Text style={baseStyles.mainButtonText}>+</Text>
        </Button>
      </ListItem>
      {/* Milk */}
      <ListItem style={baseStyles.cardListItem}>
        <Title style={baseStyles.heading2}>Milk</Title>
        <Button transparent>
          <Text style={baseStyles.mainButtonText}>
            {item.milk ? 'Yes' : 'No'}
          </Text>
        </Button>
      </ListItem>
      {/* Comment */}
      <Form>
        <Textarea
          rowSpan={2}
          style={baseStyles.cardForm}
          bordered
          placeholder="Add your comment"
          placeholderTextColor={baseColorDark}
          selectionColor={baseColorDark}
          sd
        />
      </Form>
    </Card>
  );
};

const mapStateToProps = ({
  shopsListState: {selectedShop, selectedShopProducts, cart},
}) => {
  return {selectedShop, selectedShopProducts, cart};
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseAmount: (item) => dispatch(increaseAmount(item)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
