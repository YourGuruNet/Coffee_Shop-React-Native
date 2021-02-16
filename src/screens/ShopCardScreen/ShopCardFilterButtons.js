import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

const ShopCardFilterButtons = ({uniqueCountryList}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.filterButton}>
      <Text style={styles.filterButtonText}>{item}</Text>
    </TouchableOpacity>
  );
  return (
    <FlatList
      data={uniqueCountryList}
      renderItem={renderItem}
      keyExtractor={(index) => index}
      horizontal
    />
  );
};

const styles = StyleSheet.create({
  filterButton: {
    backgroundColor: 'black',
    paddingVertical: 20,
    paddingHorizontal: 30,
    elevation: 8,
    marginHorizontal: 5,
    marginVertical: 10,
  },
  filterButtonText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default ShopCardFilterButtons;
