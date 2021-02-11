import React, {useEffect} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import {styles} from '../../assets/Styles';
import {shopData} from '../../data';
import {connect} from 'react-redux';
import {
  getSelectedShop,
  getShopsList,
} from '../../components/reducer/ShopListActions';

const ShopsList = ({navigation, shopsList, getShopsList, getSelectedShop}) => {
  useEffect(() => {
    getShopsList(shopData);
  }, [getShopsList]);
  const renderItem = ({item}) => (
    <View style={styles.textView}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => getSelectedShop(item, navigation)}>
        <Text style={{fontSize: 20, paddingVertical: 5}}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
  return shopsList === undefined ? (
    <Text style={{fontSize: 20, textAlign: 'center'}}>Loading...</Text>
  ) : (
    <FlatList
      data={shopsList}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const mapStateToProps = ({shopsListState: {shopsList}}) => {
  return {shopsList};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getShopsList: (shopData) => dispatch(getShopsList(shopData)),
    getSelectedShop: (item, navigation) =>
      dispatch(getSelectedShop(item, navigation)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopsList);
