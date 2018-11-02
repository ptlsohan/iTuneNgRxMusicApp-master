import * as fromCart from './cart.reducer';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';
import {State} from '../../store/reducer/index';
import * as fromCartReducer from './cart.reducer';


/*const getMusicFeatureState = createFeatureSelector<fromCart.CartState>('cart');*/
const getMusicFeatureState = createFeatureSelector<fromCart.CartState>('cart');

export const getCartItems = createSelector(
  getMusicFeatureState,
  state => state.musicItem
);
export const getCount = createSelector(
  getMusicFeatureState,
  state => state.totalCount
);

export const getSum = createSelector(
  getMusicFeatureState,
  state => state.totalSum
)

/*
export const reducers: ActionReducerMap<State> = { cart: fromCartReducer.cartReducer};*/

