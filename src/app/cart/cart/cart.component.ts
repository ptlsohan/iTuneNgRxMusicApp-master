import {Component, DoCheck, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {from, Observable} from 'rxjs';
import * as fromRoot from '../../store/reducer/index';
import {select, Store} from '@ngrx/store';
import {takeWhile} from 'rxjs/operators';
import * as fromCart from '../store/index';
import * as CartActions from '../store/cart.actions';
import {Router} from '@angular/router';
import {MusicItem} from '../models/musicItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, DoCheck, OnDestroy {
  fav$: Observable<any[]>;
  items: MusicItem[] ;
  componentActive = true;
  price: number;
  private totalCount = 0;

  constructor(private store: Store<fromRoot.State>, private route: Router) { }

  ngOnInit() {
     this.store.pipe(select(fromCart.getCount)).subscribe(count => this.totalCount = count);
     this.store.pipe(select(fromCart.getCartItems),
       takeWhile(() => this.componentActive))
       .subscribe(x => this.items = x);
    this.store.pipe(select(fromCart.getSum),
      takeWhile(() => this.componentActive))
      .subscribe(x => this.price = x);
    console.log(this.totalCount);
    }
  ngDoCheck(): void {
    console.log(this.totalCount);
  }
  ngOnDestroy() {
    this.componentActive = false;
  }
  // deleteItem(music) {
  //   if ( confirm('Remove ' + music.trackName + ' from cart?')) {
  //     this.store.dispatch(new CartActions.DeleteItem(music));
  //   }
  //   this.price = this.items.map(x => x.trackPrice).reduce((acc, currentValue) =>
  //     acc + currentValue);
  //   console.log('price:', this.price);
  // }
  addQty(item) {
    this.store.dispatch(new CartActions.AddToCart(item));
    this.store.pipe(select(fromCart.getSum),
      takeWhile(() => this.componentActive))
      .subscribe(x => this.price = x);
  }
removeQty(item) {
  this.store.dispatch(new CartActions.DeleteItem(item));
  this.store.pipe(select(fromCart.getSum),
    takeWhile(() => this.componentActive))
    .subscribe(x => this.price = x);
  }



}
