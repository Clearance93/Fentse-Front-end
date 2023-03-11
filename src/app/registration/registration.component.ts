<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Registration } from '../model/registration';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> ede5cc6 (Front-End)

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

<<<<<<< HEAD
  register: Registration = new Registration();

  constructor(private _route: Router, private _http: HttpClient) { }
=======
  constructor() { }
>>>>>>> ede5cc6 (Front-End)

  ngOnInit(): void {
  }

<<<<<<< HEAD
  Registration(){
    this._http.post('http://localhost:3000/register', this.register).subscribe(data => {
      console.log(data);
      this._route.navigate(['/login'])
    }, err => {
      console.error(err);
    })
  }

=======
>>>>>>> ede5cc6 (Front-End)
}
