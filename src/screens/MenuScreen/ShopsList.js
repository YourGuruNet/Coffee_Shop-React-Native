import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {
  getSelectedShop,
  getShopsList,
} from '../../components/reducer/ShopListActions';
import Loading from '../../components/Loading';
import {Content, List, ListItem, Text, Body, Right} from 'native-base';
import {baseStyles} from '../../assets/styles';
const ShopsList = ({
  navigation,
  shopsList,
  getShopsList,
  getSelectedShop,
  loading,
}) => {
  useEffect(() => {
    getShopsList();
  }, [getShopsList]);
  return loading ? (
    <Loading />
  ) : (
    <Content>
      <List style={baseStyles.menuListContainer}>
        {shopsList.map((item, id) => {
          return (
            <ListItem
              style={baseStyles.menuListItem}
              key={id}
              onPress={() => getSelectedShop(item, navigation)}>
              <Body>
                <Text style={baseStyles.heading2}>{item._data.title}</Text>
                <Text note numberOfLines={1} style={baseStyles.heading3}>
                  {item._data.description}
                </Text>
              </Body>
              <Right>
                <Text style={baseStyles.heading2}>&#9655;</Text>
              </Right>
            </ListItem>
          );
        })}
      </List>
    </Content>
  );
};

const mapStateToProps = ({shopsListState: {shopsList, loading}}) => {
  return {shopsList, loading};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getShopsList: () => dispatch(getShopsList()),
    getSelectedShop: (item, navigation) =>
      dispatch(getSelectedShop(item, navigation)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopsList);
