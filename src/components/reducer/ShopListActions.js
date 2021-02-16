import firestore from '@react-native-firebase/firestore';

export const activitiesConst = {
  SET_LOADING: 'SET_LOADING',
  GET_SHOPS_LIST: 'GET_SHOPS_LIST',
  GET_SELECTED_SHOP: 'GET_SELECTED_SHOP',
};

export const setLoading = () => {
  return {type: activitiesConst.SET_LOADING};
};

export const getShopsList = () => {
  return async function (dispatch) {
    dispatch(setLoading());
    const data = await firestore().collection('shopData').get();
    dispatch({
      type: activitiesConst.GET_SHOPS_LIST,
      payload: data._docs,
    });
  };
};

export const getSelectedShop = (item, navigation) => {
  return async function (dispatch) {
    dispatch(setLoading());
    dispatch({
      type: activitiesConst.GET_SELECTED_SHOP,
      payload: item,
    });
    navigation.navigate('ShopCardScreen');
  };
};
