import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { Registration } from '../model/registration';
=======
>>>>>>> ede5cc6 (Front-End)

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

<<<<<<< HEAD
  register: Registration = new  Registration();
  users: Array<Registration> = [];

  constructor(private _route: Router, private _http: HttpClient) { }

  ngOnInit(): void {
    this._http.get<Registration[]>(`http://localhost:3000/register`).subscribe(data => {
      this.users = data;
      console.log(data);
=======
  email: string = "";
  password: string = "";

  constructor(private _http: HttpClient,
              private _route: Router) { }

  ngOnInit(): void {
  }

  login() {
    this._http.post('http://localhost:3000/userlogin', {
      email: this.email,
      password: this.password
    }).subscribe((response: any) => {
        localStorage.setItem('token', response.token)
        this._route.navigate(['./home']);
>>>>>>> ede5cc6 (Front-End)
    }, err => {
      console.error(err);
    })
  }

<<<<<<< HEAD
  login() {
    if(this.isUserExist()) {
      localStorage.setItem('isLogedIn', "true");
      this._route.navigate(['/home'])
    }
  }

  isUserExist(){
    for(const register of this.users) {
      if(register.Email == this.register.Email && register.Password == this.register.Password) {
        return true;
      }
    }
    return false;
  }

=======
>>>>>>> ede5cc6 (Front-End)
}
