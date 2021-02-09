import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {styles} from '../../assets/Styles';

const MenuTopButtonBar = ({navigation}) => {
  const buttonContent = [
    {title: 'Specialty', root: 'AddPaymentScreen'},
    {title: 'Convenient', root: 'AddPaymentScreen'},
    {title: 'Settings', root: 'AddPaymentScreen'},
  ];
  return (
    <View style={styles.menuTopButtonBarContainer}>
      {buttonContent.map((item, id) => {
        return (
          <TouchableOpacity
            key={id}
            activeOpacity={0.8}
            onPress={() => navigation.navigate(`${item.root}`)}
            style={styles.menuTopButtonBarButton}>
            <Text style={styles.MenuTopButtonBarText}>{item.title}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MenuTopButtonBar;
