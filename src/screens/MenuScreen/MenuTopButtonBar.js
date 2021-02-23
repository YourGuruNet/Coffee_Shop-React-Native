import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'native-base';
import {baseStyles} from '../../assets/styles';
const MenuTopButtonBar = ({navigation}) => {
  const buttonContent = [
    {title: 'Specialty', root: 'AddPaymentScreen'},
    {title: 'Convenient', root: 'AddPaymentScreen'},
    {title: 'Settings', root: 'AddPaymentScreen'},
  ];
  return (
    <View style={baseStyles.menuTopButtonBarContainer}>
      {buttonContent.map((item, id) => {
        return (
          <Button
            key={id}
            full
            style={baseStyles.mainSmallButton}
            onPress={() => navigation.navigate(`${item.root}`)}>
            <Text style={baseStyles.mainButtonText}>{item.title}</Text>
          </Button>
        );
      })}
    </View>
  );
};

export default MenuTopButtonBar;
