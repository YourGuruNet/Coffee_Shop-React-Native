import React from 'react';
import {connect} from 'react-redux';
import {
  Container,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Button,
  Title,
} from 'native-base';
import logo from '../../assets/images/logo.jpg';
import {baseStyles} from '../../assets/styles';
import {
  getSelectedShop,
  showSelectedShopInMap,
} from '../../components/reducer/ShopListActions';
const MapCardSlider = ({
  shopsList,
  getSelectedShop,
  navigation,
  showSelectedShopInMap,
}) => {
  return (
    <View style={baseStyles.mapCardSliderContainer}>
      <DeckSwiper
        dataSource={shopsList}
        renderItem={(item) => (
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={logo} />
                <Body>
                  <Text>{item._data.title}</Text>
                  <Text note>{item._data.description}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Button
                style={baseStyles.mapCardButtonLeft}
                onPress={() => showSelectedShopInMap(item, navigation)}>
                <Text style={baseStyles.mapCardButtonLeftText}>
                  Show in map
                </Text>
              </Button>
              <Button
                style={baseStyles.mapCardButtonRight}
                onPress={() => getSelectedShop(item, navigation)}>
                <Text style={baseStyles.mapCardButtonRightText}>
                  Go to shop
                </Text>
              </Button>
            </CardItem>
          </Card>
        )}
      />
    </View>
  );
};

const mapStateToProps = ({shopsListState: {shopsList}}) => {
  return {shopsList};
};
const mapDispatchToProps = (dispatch) => {
  return {
    getSelectedShop: (item, navigation) =>
      dispatch(getSelectedShop(item, navigation)),
    showSelectedShopInMap: (item) => dispatch(showSelectedShopInMap(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapCardSlider);
