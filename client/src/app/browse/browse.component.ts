import { Component, OnInit } from '@angular/core';
import { UserService } from './../users/user.service';
import { Bike } from '../listings/bike';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  bikes: Array<Bike>;
  contactdetails: Bike;
  str;
  strsearch;  currentUser;
  constructor(private _userService: UserService , private router: Router) { }

  ngOnInit() {
    this.strsearch = '';
    this.getAllBikes();
  }

  getAllBikes() {
    this._userService.getAllBikes()
    .then( (data) => {
      console.log(data);
    console.log('All bikes');
    this.currentUser = data.userid;
    this.bikes = data.bikes;
    this.router.navigate(['market' , 'browse']);
  })
    .catch( err => console.log('alldata' , err));
  }

  contact(contactdetails) {
    console.log('i am in contact');
    console.log(contactdetails)
    alert('hello');
  }

  delete(id){
    console.log('i am in delete')
    console.log(id)
    this._userService.delete(id)
      .then( () => this.ngOnInit() )
      .catch( err => console.log('delete error', err));
    }

  }


