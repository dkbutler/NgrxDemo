import { Component, OnInit } from '@angular/core';
import { TruckService } from './../Truck.Service';
import { Truck } from './../Truck';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import * as TruckActions from './../actions/truck.actions'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor( private truckService: TruckService,
    private store: Store<AppState>, private router: Router){}

    ngOnInit() {
    }

  goNext(){
    this.router.navigate(['/different-page']);
  }


}
