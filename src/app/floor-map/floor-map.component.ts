import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';
import { FloorMap } from '../model/floor-map';


@Component({
  selector: 'app-floor-map',
  templateUrl: './floor-map.component.html',
  styleUrls: ['./floor-map.component.css']
})
export class FloorMapComponent implements OnInit {
  map: FloorMap = new FloorMap();
  _id: any;
  

  constructor(private _auth: AuthGuardService,
              private _active: ActivatedRoute) { }

  ngOnInit(): void {
    this._id = this._active.snapshot.paramMap.get('_id');
    this._auth.getFloorById(this._id).subscribe(data => {
      this.map = data;
      console.log(data)
    }, err => {
      console.error(err)
    })
  }
}
