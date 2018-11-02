import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit, OnChanges {
  @Input() music;
  @Input() errorMessage: string;
  @Input() selectedMusic: any;
  @Input() page: number;
  @Output() selected = new EventEmitter<any>();
  @Output() setPage = new EventEmitter<number>();
  s = 0;
  e = 10;
  total = 0;
  numbers = [];
  pageOfItems: Array<any>;
  p: number;

  collection: any[];
  constructor(private router: Router ) { }

  ngOnInit() {
    this.p = this.page;
     }
  ngOnChanges() {
    this.total = this.music.length / 10;
   this.numbers = Array(this.total).fill(0).map((x, i ) => i);
    this.collection = this.music;
     }

  musicSelected(m) {
  this.selected.emit(m);
  }
  pageNum(p: number){
    this.setPage.emit(this.p);
     }
}
