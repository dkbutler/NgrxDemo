import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as TruckActions from './../actions/truck.actions'
import { v4 as uuidv4 } from 'uuid';
import { Truck } from './../Truck';
import { TruckService } from '../Truck.Service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})


export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>, private truckService: TruckService) { }


  addTruckToStore(Make, Model, Year){
    this.store.dispatch(new TruckActions.AddTruck({
      id: uuidv4(),
      make: Make,
      model: Model,
      year: Year
     }))
  }

   NonStoreTrucks = [];

  addTruckToPage(Make, Model, Year){
    this.NonStoreTrucks.push(
    {
      id: uuidv4(),
      make: Make,
      model: Model,
      year: Year
    })

    this.truckService.notifyChangeInNonStoreTrucks(this.NonStoreTrucks);
  }

  ngOnInit(): void {
    this.truckService.listenNonStoreTrucks().subscribe((res: Truck[]) => {
      this.NonStoreTrucks = res;
    })
  }

}
