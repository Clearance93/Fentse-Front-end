import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FloorMap } from '../model/floor-map';
import { Registration } from '../model/registration';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  reg: Registration [] = [];
   map: FloorMap [] = [];

    private apiUrl = 'http://localhost:3000/map/addfloor'
 

  constructor(private _http: HttpClient) { }

  getFloor() {
    return this._http.get<FloorMap[]>(`http://localhost:3000/map`).pipe(map((res: any) => {
      return res;
    }))
  }

  getFloorById(_id: any): Observable<FloorMap> {
    return this._http.get<FloorMap>(`http://localhost:3000/map/${_id}`)
  }

  addShop(_id: any, map: FloorMap) {
    return this._http.post<FloorMap>(this.apiUrl + '/' + _id, map);
  }
  
}
