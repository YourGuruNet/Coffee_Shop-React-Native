import {activitiesConst} from './ShopListActions';

// Setup initial states
const defaultState = {
  loading: false,
  shopsList: [],
  selectedShop: null,
  selectedShopProducts: null,
  cart: [],
  showShopInMap: [],
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
    case activitiesConst.SHOW_SELECTED_SHOP_IN_MAP:
      return {
        ...state,
        showShopInMap: action.payload,
      };
    case activitiesConst.FILTER_BY_COUNTRY:
      return {
        ...state,
        selectedShopProducts: action.payload,
      };
    case activitiesConst.ADD_TO_CART:
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            selectedShop: action.shopName,
            productName: action.payload.productName,
            size: '',
            quantity: 1,
            sugar: 0,
            milk: false,
            comment: '',
          },
        ],
      };
    case activitiesConst.INCREASE:
      return {
        ...state,
        cart: state.cart.map((item) => {
          return item.productName === action.productName &&
            item.selectedShop === action.selectedShop
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : {...item};
        }),
      };

    case activitiesConst.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};
