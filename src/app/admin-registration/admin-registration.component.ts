<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminRegistration } from '../model/admin-registration';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> ede5cc6 (Front-End)

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent implements OnInit {

<<<<<<< HEAD
  admin: AdminRegistration = new AdminRegistration(); 

  constructor(private route: Router, private _http: HttpClient) { }
=======
  constructor() { }
>>>>>>> ede5cc6 (Front-End)

  ngOnInit(): void {
  }

<<<<<<< HEAD
  AdminRegistration() {
    this._http.post("http://localhost:3000/adminReg", this.admin).subscribe(data => {
      console.log(data);
      this.route.navigate(['/admin-login']);
    }, err => {
      console.error(err)
    })
  }

=======
>>>>>>> ede5cc6 (Front-End)
}
