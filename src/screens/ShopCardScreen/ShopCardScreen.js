import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {styles} from '../../assets/Styles';
import {connect} from 'react-redux';

const ShopCardScreen = ({navigation, selectedShop}) => {
  console.log(selectedShop);
  return (
    <View style={styles.textView}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
        <Text style={styles.goBackButtonText}>&#8656;Go Back</Text>
      </TouchableOpacity>
      <Text style={styles.headerText}>{selectedShop.title}</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate('CheckoutPageScreen', {title: title})
        }
        style={styles.bigMainButton}>
        <Text style={styles.appButtonText}>Proceed to checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = ({shopsListState: {selectedShop}}) => {
  return {selectedShop};
};

export default connect(mapStateToProps)(ShopCardScreen);
