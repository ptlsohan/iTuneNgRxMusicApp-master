import {MusicItem} from '../models/musicItem';
import {CartActions, CartActionTypes} from './cart.actions';

export interface CartState {
  musicItem: MusicItem[];
  totalCount: number;
  totalSum: number;
}

const initialState: CartState = {
  musicItem: [],
  totalCount: 0,
  totalSum: 0
}

function updateMusicItem(state: CartState, payload: MusicItem) {

  // @ts-ignore
  const targetItem = state['musicItem'].find(item => item.trackId === payload.trackId);

  if (targetItem) { // If musicObject already Exist
    targetItem.count++;
    targetItem.sum = payload.trackPrice * targetItem.count;
    console.log(payload.sum);
  } else {
    // @ts-ignore
    state.musicItem.push(payload);
    payload.count = 1;
    payload.sum = payload.trackPrice * payload.count;
    console.log( payload.sum);
    }
}

function deleteMusicItem(state: CartState, payload: MusicItem) {
  const targetItem = state['musicItem'].find(item => item.trackId === payload.trackId);

  if (targetItem) {
    targetItem.count--;
    targetItem.sum -= payload.trackPrice;
    if (targetItem.count === 0) {
      return{
        ...state,
        musicItem: state.musicItem.filter(music => music !== payload),
        totalCount: state.totalCount - 1,
        totalSum: state.totalSum - payload.trackPrice * 1
      };
    }

    console.log( payload.sum);
  }
}
export function cartReducer(state= initialState, action: CartActions): CartState {
  switch (action.type) {
    case CartActionTypes.AddToCart:
        updateMusicItem(state, action.payload);
        return addToCart(state, action.payload);

    case CartActionTypes.DeleteItem:
      deleteMusicItem(state, action.payload);
      return deleteFromCart(state, action.payload);

      case CartActionTypes.ClearCart:
        state.totalCount = 0;
        state.totalSum = 0;
        state.musicItem = [];
        return state;

      default:
      return state;
  }
}


export function addToCart(state: CartState , payload: MusicItem){
  return{
    ...state,
    totalCount: state.totalCount + 1,
    totalSum: state.totalSum + payload.trackPrice * 1
     };
}


export function deleteFromCart(state: CartState, payload: MusicItem){
  return{
    ...state,
    totalCount: state.totalCount - 1,
    totalSum: state.totalSum - payload.trackPrice*1
  };
}
