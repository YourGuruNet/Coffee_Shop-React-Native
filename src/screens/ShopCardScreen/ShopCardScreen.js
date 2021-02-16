import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {connect} from 'react-redux';
import {StyleSheet} from 'react-native';

const ShopCardScreen = ({navigation, selectedShop, root}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={{alignSelf: 'flex-start', padding: 10}}
        activeOpacity={0.8}
        onPress={() => navigation.goBack()}>
        <Text style={{textAlign: 'center', fontSize: 18}}>&#8656;Go Back</Text>
      </TouchableOpacity>
      <Text style={shopCardStyles.headerText}>
        {selectedShop._data.title === null
          ? root.title
          : selectedShop._data.title}
      </Text>

      <FlatList
        data={selectedShop._data.products}
        renderItem={({item}) => {
          return (
            <View style={shopCardStyles.productListItem}>
              <Text style={{fontSize: 20, paddingVertical: 5}}>
                {item.productName}
              </Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.productName}
      />

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate('CheckoutPageScreen', {title: 'test'})
        }
        style={shopCardStyles.bigMainButton}>
        <Text style={shopCardStyles.bigMainButtonText}>
          Proceed to checkout
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('MenuScreen')}
        style={shopCardStyles.bigMainButton}>
        <Text style={shopCardStyles.bigMainButtonText}>Clear cart</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const shopCardStyles = StyleSheet.create({
  headerText: {
    fontSize: 30,
    paddingVertical: 10,
    textAlign: 'center',
  },
  productListItem: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'grey',
    borderWidth: 1,
    padding: 20,
    margin: 10,
  },
  bigMainButton: {
    backgroundColor: 'black',
    paddingVertical: 20,
    alignSelf: 'stretch',
    marginVertical: 10,
    marginHorizontal: 40,
    elevation: 8,
    borderRadius: 8,
  },
  bigMainButtonText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});

const mapStateToProps = ({shopsListState: {selectedShop}}) => {
  return {selectedShop};
};

export default connect(mapStateToProps)(ShopCardScreen);
