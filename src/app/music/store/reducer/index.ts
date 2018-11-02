// import * as fromRoot from '../../../store/app.store';
import * as fromMusic from './music.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

const getMusicFeatureState = createFeatureSelector<fromMusic.MusicState>('music');

export const getMusic = createSelector(
  getMusicFeatureState,
  state => state.Music
);
export const getMusicId = createSelector(
  getMusicFeatureState,
  state => state.selectedMusicId
);
export const getError = createSelector(
  getMusicFeatureState,
  state => state.error
);

export const getSelectedMusic = createSelector(
  getMusicFeatureState,
  getMusicId,
  (state, selectedMusicId ) => {
    return selectedMusicId ? state.Music.find(x => (x.trackId || x.collectionId) === selectedMusicId) : null;
  }
);

export const getFavorite = createSelector(
  getMusicFeatureState,
  state => state.favorite
);

export const getCount = createSelector(
  getMusicFeatureState,
  state => state.count
);
export const getPage = createSelector(
  getMusicFeatureState,
  state => state.pageNum
);
export const getDetail = createSelector(
  getMusicFeatureState,
  state => state.Music.filter(x => x)
);


