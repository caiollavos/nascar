import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { Track } from '../classes/track';

@Injectable({
  providedIn: 'root'
})
export class TracksService {
  private url: string = 'http://localhost:3000/tracks/'
  public track: Track;

  constructor(private _http: HttpClient) { }

  public getTracks(): Observable<Track[]> {

    return this._http.get<Track[]>(this.url).pipe(
      map((res: Track[]) => {
        console.log('TRACK', res);
        return res;
      })
    );
  }

  getTrack(id) {
    return this._http.get<any>(this.url).pipe(
      map((res: any[]) => {

        res.forEach(item => {
          if (item.id === id) {
            return res;
          }
        })
        return res;
      })
    );
  }

  getWeatherTrack(param) {
    return this._http.get<any[]>(this.url + param).pipe(
      map((res: any[]) => {
        // console.log(res);
        return res;
      })
    )
  }

}
