import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {styles} from '../../assets/Styles';

const MenuTopButtonBar = ({navigation}) => {
  return (
    <View style={styles.menuTopButtonBarContainer}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('AddPaymentScreen')}
        style={styles.menuTopButtonBarButton}>
        <Text style={styles.MenuTopButtonBarText}>Specialty</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('AddPaymentScreen')}
        style={styles.menuTopButtonBarButton}>
        <Text style={styles.MenuTopButtonBarText}>Convenient</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('AddPaymentScreen')}
        style={styles.menuTopButtonBarButton}>
        <Text style={styles.MenuTopButtonBarText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuTopButtonBar;
