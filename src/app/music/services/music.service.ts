import { Injectable } from '@angular/core';
import {catchError, map} from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private iTuneUrl = 'https://itunes.apple.com/search?term=' ;
  constructor(private http: HttpClient) { }

  getMusic(value: string) {
    const url = `${this.iTuneUrl}${value}`;
    return this.http.get(url).pipe(
      map(data =>  data['results']),
      catchError(this.handleError)
    );
  }
    private handleError(err: HttpErrorResponse) {
    console.log(err);
    let errorMessage: string;
    if (err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
    }
    return throwError(errorMessage);
  }
}
