import React from 'react';
import {Button, Text, ListItem, List, View} from 'native-base';
import {baseStyles} from '../../assets/styles';

const ShopCardFilterButtons = ({uniqueCountryList}) => {
  return (
    <View>
      <List
        horizontal={true}
        dataArray={uniqueCountryList}
        renderRow={(item, id) => (
          <ListItem key={id} style={baseStyles.filterButtonListItem}>
            <Button full style={baseStyles.mainSmallButton}>
              <Text style={baseStyles.mainButtonText}>{item}</Text>
            </Button>
          </ListItem>
        )}></List>
    </View>
  );
};

export default ShopCardFilterButtons;
