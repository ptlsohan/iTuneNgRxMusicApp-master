import * as fromAuth from './auth.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

const getAuthState = createFeatureSelector<fromAuth.AuthState>('auth');

/*export const auth = createSelector(
  getAuthState
  state => state
);
export const getMusicId = createSelector(
  getMusicFeatureState,
  state => state.selectedMusicId
);
export const getError = createSelector(
  getMusicFeatureState,
  state => state.error
);*/



