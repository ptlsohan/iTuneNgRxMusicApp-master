import {MusicItem} from './musicItem';

export interface ShoppingCart {
  musicItem: MusicItem[];
  totalCount: number;
  totalSum: number;
}
