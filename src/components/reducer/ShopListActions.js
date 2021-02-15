import firestore from '@react-native-firebase/firestore';

export const activitiesConst = {
  GET_SHOPS_LIST: 'GET_SHOPS_LIST',
  GET_SELECTED_SHOP: 'GET_SELECTED_SHOP',
};

export const getShopsList = (shopData) => {
  return async function (dispatch) {
    const data = await firestore().collection('shopData').get();
    console.log(data);
    dispatch({
      type: activitiesConst.GET_SHOPS_LIST,
      payload: shopData,
    });
  };
};

export const getSelectedShop = (item, navigation) => {
  return async function (dispatch) {
    dispatch({
      type: activitiesConst.GET_SELECTED_SHOP,
      payload: item,
    });
    navigation.navigate('ShopCardScreen');
  };
};
