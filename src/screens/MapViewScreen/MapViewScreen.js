import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {styles} from '../../assets/Styles';

const MapViewScreen = ({navigation}) => {
  return (
    <View style={styles.textView}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
        <Text style={styles.goBackButtonText}>&#8656; Go Back</Text>
      </TouchableOpacity>
      <Text style={styles.headerText}>Map View</Text>
    </View>
  );
};

export default MapViewScreen;
