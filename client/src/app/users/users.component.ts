import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

import { User } from './user';
import { Login } from './login';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User;  login: Login;
  loginflag: boolean;  registerflagFailure: boolean; registerflagSucess: boolean;

  constructor( private _userService: UserService, private router: Router) { }

  ngOnInit() {
    this.user = new User;
    this.login = new Login;
    this.loginflag = false;
    this.registerflagSucess = false;
    this.registerflagFailure = false;
  }

  register() {
    console.log('i am inside register');
    console.log(this.user);
    this._userService.register(this.user)
    .then( () => { this.registerflagSucess = true;
      console.log('User registered'); this.router.navigate(['/']); } )
      .catch( err => { this.registerflagFailure = true; console.log('Registration failed', err); } );
    this.user = new User;
    this.registerflagSucess = false;
    this.registerflagFailure = false;
  }


  checklogin() {
    console.log('i am inside login');
    console.log(this.login);
    this._userService.login(this.login)
    .then( () => { console.log('Logged in'); this.router.navigate(['/market']); } )
      .catch( err => { this.loginflag = true; console.log('Log in failed', err); } );
    this.login = new Login;
    this.loginflag = false;
  }

}
