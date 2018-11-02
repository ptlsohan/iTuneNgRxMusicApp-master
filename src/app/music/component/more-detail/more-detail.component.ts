import {Component, OnDestroy, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import * as fromMusic from '../../store/reducer';
import {select, Store} from '@ngrx/store';
import * as fromRoot from '../../../store/reducer/index';

import {takeWhile} from 'rxjs/operators';
import * as CartActions from '../../../cart/store/cart.actions';
import {MusicItem} from '../../../cart/models/musicItem';

@Component({
  selector: 'app-more-detail',
  templateUrl: './more-detail.component.html',
  styleUrls: ['./more-detail.component.css']
})
export class MoreDetailComponent implements OnInit, OnDestroy {
trackId: number;
  constructor(private location: Location, private route: ActivatedRoute,
              private store: Store<fromRoot.State>) { }
  currentMusic: any;
  componentActive = true;
  ngOnInit() {
    this.trackId = this.route.snapshot.queryParams['trackId'];

    this.store.pipe(
      select(fromMusic.getSelectedMusic),
      takeWhile(() => this.componentActive)
    ).subscribe(
      currentMusic => this.currentMusic = currentMusic
    );

  }
back() {
    this.location.back();
}
ngOnDestroy() {
    this.componentActive = false;
}
addToCart(val) {
    console.log('Value:', val);
    const cartItem = new MusicItem(val.trackId, val.trackName, val.trackPrice);
    this.store.dispatch(new CartActions.AddToCart(cartItem));
    alert(val.trackName + ' added to cart');
}
}
