import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FloorMap } from '../model/floor-map';

@Component({
  selector: 'app-floor-add',
  templateUrl: './floor-add.component.html',
  styleUrls: ['./floor-add.component.css']
})
export class FloorAddComponent implements OnInit {

  floorNumber: string = "";
  floor_image: string = "";
  map: any;

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
  }

  submit() {
    this._http.post(`http://localhost:3000/map`, {
      floorNumber: this.floorNumber,
      floor_image: this.floor_image
    }).subscribe(data => {
      this.map = data
      console.log(data)
    })
  }

}
