import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

const CheckoutPageScreen = ({navigation, route}) => {
  const {title} = route.params;
  return (
    <View style={styles.textView}>
      <Text style={styles.headerText}>{title}</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('AddPaymentScreen')}
        style={styles.bigMainButtonContainer}>
        <Text style={styles.bigMainButtonText}>Slide to confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
    paddingVertical: 10,
    color: 'black',
  },
  bigMainButtonContainer: {
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

export default CheckoutPageScreen;
