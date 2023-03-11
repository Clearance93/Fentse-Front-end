import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FloorMap } from '../model/floor-map';
import { AuthGuardService } from '../services/auth-guard.service';

@Component({
  selector: 'app-shop-add',
  templateUrl: './shop-add.component.html',
  styleUrls: ['./shop-add.component.css']
})
export class ShopAddComponent implements OnInit {

  // map: FloorMap = new FloorMap();
  map: FloorMap = {
    _id: '',
    coordinates: [{
      latitute: 0,
      longitute: 0,
      name: '',
      edge: [{
        from: '',
        to: ''
      }]
    }],
    shops: [{
      shop_name: '',
      distance: 0,
      shop_image: '',
      from: '',
      to: ''
    }],
    floorNumber: 0,
    floor_image: ''
  };
  
  _id: any;

  constructor(private _auth: AuthGuardService,
              private _active: ActivatedRoute,
              private _route: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this._id = this._active.snapshot.paramMap.get('_id');
  
    if (this.map.coordinates[0].latitute && this.map.coordinates[0].longitute && this.map.shops[0].shop_name && this.map.shops[0].distance && this.map.shops[0].shop_image && this.map.shops[0].from && this.map.shops[0].to) {
      this._auth.addShop(this._id, this.map).subscribe(data => {
        console.log(data);
        alert(`Shop added suuccessfully in floor`)
        this._route.navigate([`/floor-map/${this._id}`])
      }, err => {
        console.error(err);
      });
    } else {
      console.log('Please fill in all fields');
    }
    
  }
  

}
