import {activitiesConst} from './ShopListActions';

// Setup initial states
const defaultState = {
  shopsList: [],
  selectedShop: null,
};
// Reducer setup
export const ShopsListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case activitiesConst.GET_SHOPS_LIST:
      return {...state, shopsList: action.payload};
    case activitiesConst.GET_SELECTED_SHOP:
      return {...state, selectedShop: action.payload};
    default:
      return state;
  }
};
