import { Injectable } from '@angular/core';
import * as MusicActions from '../../music/store/actions/music.action';
import * as fromMusic from '../../music/store/reducer';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../store/reducer/index';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string;

  constructor(private store: Store<fromRoot.State>) { }

  isLoggedIn(): boolean {
    const uName: string = localStorage.getItem('uName');
    const pwd: string = localStorage.getItem('pwd');
    if ( uName ) {
      return true;
    }
    return false;
  }

  logIn(username: string, password: string): void {
    localStorage.setItem('uName', username);
    localStorage.setItem('pwd', password);
  }

  logOut() {
    localStorage.clear();
    this.store.dispatch(new MusicActions.ClearMusic());
  }
}
