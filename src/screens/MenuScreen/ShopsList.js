import React from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import {styles} from '../../assets/Styles';

const CompanyList = [
  {
    id: '1',
    title: 'SIA Coffee Shop',
  },
  {
    id: '2',
    title: 'Coffee and Go',
  },
  {
    id: '3',
    title: 'SIA Big Cup',
  },
  {
    id: '4',
    title: ' SIA Trīs Balti Krekli',
  },
  {
    id: '5',
    title: ' SIA Tasty Coffee',
  },
];

const ShopsList = ({navigation}) => {
  const renderItem = ({item}) => (
    <View style={styles.textView}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate('ShopCardScreen', {
            title: item.title,
          })
        }>
        <Text style={{fontSize: 20, paddingVertical: 5}}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <FlatList
      data={CompanyList}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ShopsList;
