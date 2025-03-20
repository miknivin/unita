import { combineReducers } from 'redux';

import bookingReducer from './slices/bookingSlice';
import cartReducer from './slices/cart-slice';
import wishlistReducer from './slices/wishlist-slice';
import compareReducer from './slices/compare-slice';

const rootReducer = combineReducers({
  booking: bookingReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  compare: compareReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
