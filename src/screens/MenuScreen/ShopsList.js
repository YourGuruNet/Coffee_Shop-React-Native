import React, {useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {
  getSelectedShop,
  getShopsList,
} from '../../components/reducer/ShopListActions';
import Loading from '../../components/Loading';

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
  const renderItem = ({item}) => (
    <View style={styles.textView}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => getSelectedShop(item, navigation)}>
        <Text style={styles.shopsListButton}>{item._data.title}</Text>
      </TouchableOpacity>
    </View>
  );
  return loading ? (
    <Loading />
  ) : (
    <FlatList
      data={shopsList}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  textView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shopsListButton: {
    fontSize: 20,
    paddingVertical: 5,
  },
});

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
