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
    <Container>
      <View style={{margin: 10}}>
        <DeckSwiper
          dataSource={shopsList}
          renderItem={(item) => (
            <Card style={{elevation: 3}}>
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
                  bordered
                  success
                  onPress={() => showSelectedShopInMap(item, navigation)}>
                  <Text>Show in map</Text>
                </Button>
                <Button
                  bordered
                  warning
                  style={{marginLeft: 10}}
                  onPress={() => getSelectedShop(item, navigation)}>
                  <Text>Go to shop</Text>
                </Button>
              </CardItem>
            </Card>
          )}
        />
      </View>
    </Container>
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
