<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Locations } from '../model/location';
=======
import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../services/auth-guard.service';
>>>>>>> ede5cc6 (Front-End)

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

<<<<<<< HEAD
  direct:Array<Locations> = [];
  flag: boolean = false;
  Retailor: string = "";
  Images: string = "";
  location: string = "";
  createdAt: string = "";
  updated: string = "";

  public locat: any;
  

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this._http.get(`http://localhost:3000/locator`).subscribe(data => {
      console.log(data);
      this.locat = data;
    })
  }



=======
  map: any;

  constructor(private _auth: AuthGuardService) { }

  ngOnInit(): void {
    this._auth.getFloor().subscribe(data => {
      this.map = data;
      console.log(data);
    })
  }

>>>>>>> ede5cc6 (Front-End)
}
