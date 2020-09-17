import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Driver } from 'src/app/classes/driver';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  private url: string = 'http://localhost:3000/drivers'
  constructor(private _http: HttpClient) { }

  // public getDrivers():Observable<Driver[]> {
  //   return this._http.get<Driver[]>(this.url)
  // }

  getDrivers(): Observable<Driver[]> {
    return this._http.get<Driver[]>(this.url).pipe(
        map((res: any) => {
          console.log(res);
          return res;
        })
    );
}
}
