import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {styles} from '../../assets/Styles';

const CheckoutPageScreen = ({navigation, route}) => {
  const {title} = route.params;
  return (
    <View style={styles.textView}>
      <Text style={styles.headerText}>{title}</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('AddPaymentScreen')}
        style={styles.bigMainButton}>
        <Text style={styles.appButtonText}>Slide to confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckoutPageScreen;
