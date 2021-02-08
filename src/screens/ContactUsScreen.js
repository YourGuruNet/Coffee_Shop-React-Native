import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../assets/Styles';

const ContactUsText = 'Contact Us Screen';

const ContactUsScreen = ({navigation}) => {
  return (
    <View style={styles.textView}>
      <Text style={styles.headerText}>{ContactUsText}</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.goBack()}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactUsScreen;
