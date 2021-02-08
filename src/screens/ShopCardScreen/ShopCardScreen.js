import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {styles} from '../../assets/Styles';

const ShopCardScreen = ({navigation, route}) => {
  const {title} = route.params;
  return (
    <View style={styles.textView}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
        <Text style={styles.goBackButtonText}>&#8656;Go Back</Text>
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
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

export default ShopCardScreen;
