import {activitiesConst} from './ShopListActions';

// Setup initial states
const defaultState = {
  loading: true,
  shopsList: [],
  selectedShop: null,
  selectedShopProducts: null,
};
// Reducer setup
export const ShopsListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case activitiesConst.SET_LOADING:
      return {...state, loading: true};
    case activitiesConst.GET_SHOPS_LIST:
      return {...state, shopsList: action.payload, loading: false};
    case activitiesConst.GET_SELECTED_SHOP:
      return {
        ...state,
        selectedShop: action.payload,
        selectedShopProducts: action.payload._data.products,
        loading: false,
      };
    case activitiesConst.FILTER_BY_COUNTRY:
      return {
        ...state,
        selectedShopProducts: action.payload,
      };
    default:
      return state;
  }
};
