import { MusicActionTypes, MusicActions } from '../actions/music.action';


export interface MusicState {
  selectedMusicId: number;
  favorite: any[];
  Music: any[];
  error: string;
  count: number;
  pageNum: number;
}

const initialState: MusicState = {
  selectedMusicId: 0,
  favorite: [],
  Music: [],
  error: '',
  count: 0,
  pageNum: 1
};

export function musicReducer(state = initialState, action: MusicActions): MusicState {

  switch (action.type) {
    case MusicActionTypes.GetSuccess:
      return {
        ...state,
        Music: action.payload,
        error: ''
      };

    case MusicActionTypes.GetFail:
      return {
        ...state,
        Music: [],
        error: action.payload
      };

    case MusicActionTypes.CurrentMusic:
      return {
        ...state,
      /*  selectedMusicId: action.payload.trackId*/
        selectedMusicId: action.payload
      };
    case MusicActionTypes.AddFavorite:
      return {
        ...state,
        favorite: [...state.favorite, action.payload],
        count: state.favorite.length + 1
      };
    case MusicActionTypes.DeleteFavorite:
      return {
        ...state,
        favorite: state.favorite.filter(music => music !== action.payload),
        count: state.count - 1,
        error: ''
      };
    case MusicActionTypes.ClearMusic:
      return {
        ...state,
        selectedMusicId: 0,
        Music: [],
        error: '',
        pageNum : 1
      };
    case MusicActionTypes.SetPageNo:
      return {
        ...state,
       pageNum : action.payload
      };
      default:
      return state;
  }
}
