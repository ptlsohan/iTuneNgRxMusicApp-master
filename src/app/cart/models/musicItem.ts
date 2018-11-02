export class MusicItem{
  trackId:number;
  trackName:number;
  trackPrice:number;
  count:number;
  sum: number;

  constructor(trackId: number, trackName: number, trackPrice: number){
    this.trackId = trackId;
    this.trackName = trackName;
    this.trackPrice = trackPrice;
  }
}
