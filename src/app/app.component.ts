import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { Truck } from './Truck';
import { TruckService } from './Truck.Service';
import * as TruckActions from './actions/truck.actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor( private truckService: TruckService,
    private store: Store<AppState>, private router: Router){}

  title = "Trucks";

  ngOnInit() {
    this.getTrucks();
    this.router.navigate(['/home-page']);
  }

  trucks : Truck[];

  getTrucks(): void {
    const that = this;
    this.truckService.getTrucks()
        .subscribe(function(trucks){
          trucks.forEach(element => {
            that.store.dispatch(new TruckActions.AddTruck({
              id:element.id,
              make: element.make,
              model: element.model,
              year: element.year
             }))
          });

        });
  }

}

