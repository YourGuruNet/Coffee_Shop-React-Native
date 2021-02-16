import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const AddPaymentScreen = () => {
  return (
    <View style={styles.textView}>
      <Text style={styles.headerText}>Add your payment option</Text>
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
});

export default AddPaymentScreen;
