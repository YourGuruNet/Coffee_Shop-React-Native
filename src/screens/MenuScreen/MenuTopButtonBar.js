import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

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

const styles = StyleSheet.create({
  menuTopButtonBarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  menuTopButtonBarButton: {
    backgroundColor: 'black',
    paddingVertical: 20,
    paddingHorizontal: 30,
    elevation: 8,
    marginHorizontal: 2,
  },
  MenuTopButtonBarText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default MenuTopButtonBar;
