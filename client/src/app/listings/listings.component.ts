import { Component, OnInit } from '@angular/core';
import { Bike } from './bike';
import { UserService } from './../users/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  bike: Bike; myBikes: Array<Bike>;  mybike: Bike;
  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit() {
    this.bike =  new Bike;
    this.mybike = new Bike;
    this.getAllMyBikes();
  }

  createBike() {
    console.log(this.bike);
    this._userService.addbike(this.bike)
    .then(() => {console.log('Bike created');this.getAllMyBikes();} )
    .catch( err => console.log('Bike error', err));
  }

  getAllMyBikes() {
    console.log('i am in my bikes');
    this._userService.getAllMyBikes()
      .then( (myBikes) => { this.myBikes = myBikes;
        console.log(myBikes)
         this.router.navigate(['market' , 'listings']); })
      .catch( err => console.log(err));

  }

  update(mybike) {
    console.log(mybike);
    this._userService.update(mybike)
    .then( () => this.ngOnInit() )
    .catch( err => console.log('update', err) );
  }
}
