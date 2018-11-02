import {
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  EventEmitter,
  HostListener,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {select, Store} from '@ngrx/store';

import * as fromMusic from '../../store/reducer';
import {Observable} from 'rxjs';
import {takeWhile} from 'rxjs/operators';
import * as MusicActions from '../../store/actions/music.action';
import * as fromRoot from '../../../store/reducer/index';
@Component({
  selector: 'app-my-fav',
  templateUrl: './my-fav.component.html',
  styleUrls: ['./my-fav.component.css']
})
export class MyFavComponent implements OnInit, OnDestroy , AfterViewInit {
  @ViewChild('favItem') favItem: ElementRef;
  fav$: Observable<any[]>;
  favorite: any[] ;
  componentActive = true;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
   // this.fav$ = this.store.pipe.subscribe(select(fromMusic.getFavorite));
    console.log(this.favItem);
    this.store.pipe(
      select(fromMusic.getFavorite),
      takeWhile(() => this.componentActive)
    ).subscribe(
      currentProduct => this.favorite = currentProduct
    );
  console.log(this.favorite);
  }

  ngAfterViewInit(): void {
    console.log(this.favItem);
  }


  ngOnDestroy() {
    this.componentActive = false;
  }
  deleteFav(music) {
    if ( confirm('Remove ' + music.trackName + ' from favorite?')) {
  this.store.dispatch(new MusicActions.DeleteFavorite(music) );
    }

   // alert(music.trackName + 'deleted');
  }


}
