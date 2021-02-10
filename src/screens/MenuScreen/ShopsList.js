import React from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import {styles} from '../../assets/Styles';
import {shopData} from '../../data';

const ShopsList = ({navigation}) => {
  console.log(shopData[0].products[0].size.small);
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
      data={shopData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default ShopsList;
