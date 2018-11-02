import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {mergeMap, map, catchError, tap, switchMap} from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as MusicActions from '../actions/music.action';
import {MusicActionTypes} from '../actions/music.action';
import {MusicService} from '../../services/music.service';
import {AuthActions, AuthActionTypes} from '../../../auth/store/actions/auth.actions';

@Injectable()
export class MusicEffects {

  constructor(private musicService: MusicService,
              private actions$: Actions) {}
  @Effect()
  getMusic$: Observable<Action> = this.actions$.pipe(
    ofType(MusicActionTypes.GetMusic),
    map((action: MusicActions.GetMusic) => {
       return action.payload;}),
    mergeMap((music: string) =>
      this.musicService.getMusic(music).pipe(
        map(data => (new MusicActions.GetSuccess(data))),
        catchError(err => of(new MusicActions.GetFail(err)))
      )
   ));
}
