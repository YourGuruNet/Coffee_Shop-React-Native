import React from 'react';
import {Button, Text, ListItem, View} from 'native-base';
import {baseStyles} from '../../assets/styles';
import {ScrollView} from 'react-native';
import {updateFilter} from '../../components/reducer/ShopListActions';
import {connect} from 'react-redux';

const ShopCardFilterButtons = ({
  uniqueCountryList,
  selectedShop,
  updateFilter,
}) => {
  return (
    <View style={baseStyles.menuTopButtonBarContainer}>
      <ScrollView horizontal={true}>
        {uniqueCountryList.map((country, id) => {
          return (
            <ListItem style={baseStyles.filterButtonListItem} key={id}>
              <Button
                full
                style={baseStyles.mainSmallButton}
                onPress={() => updateFilter(country, selectedShop)}>
                <Text style={baseStyles.mainButtonText}>{country}</Text>
              </Button>
            </ListItem>
          );
        })}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = ({shopsListState: {selectedShop}}) => {
  return {selectedShop};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateFilter: (country, selectedShop) =>
      dispatch(updateFilter(country, selectedShop)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShopCardFilterButtons);
