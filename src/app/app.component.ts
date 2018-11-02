import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth/services/auth.service';
import {select, Store} from '@ngrx/store';
import * as fromMusic from './music/store/reducer';
import * as fromCart from './cart/store/';
import {takeWhile} from 'rxjs/operators';
import * as fromRoot from './store/reducer/index';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  constructor() { }

  ngOnInit() {}
}
