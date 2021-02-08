import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {styles} from '../../assets/Styles';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.textView}>
      <Text style={styles.headerText}>Login page</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('MenuScreen')}
        style={styles.bigMainButton}>
        <Text style={styles.appButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
