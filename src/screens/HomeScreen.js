import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {styles} from '../assets/Styles';

const HomeText = 'Home Screen';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.textView}>
      <Text style={styles.headerText}>{HomeText}</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Contact Us')}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
