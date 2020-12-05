import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Truck } from '../Truck';
import { AppState } from '../app.state';
import { Observable } from 'rxjs';
import * as TruckActions from './../actions/truck.actions'
import { TruckService } from './../Truck.Service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  StoreTrucks: Observable<Truck[]>;

  constructor(private store: Store<AppState>, private truckService: TruckService) {
    this.StoreTrucks = store.select('truck')
   }

   NonStoreTrucks: Truck[];

   saveStoreTrucks(): void {
    this.store.select('truck').subscribe(response=> {
      this.truckService.updateTrucks(response).subscribe(response=> {
      });
    })
   }

   delTruck(index){
     this.store.dispatch(new TruckActions. RemoveTruck(index))
   }

   delNonStoreTruck(index){
    this.NonStoreTrucks.splice(index, 1)
    this.NonStoreTrucks = [...this.NonStoreTrucks];
    this.truckService.notifyChangeInNonStoreTrucks(this.NonStoreTrucks);
   }

  ngOnInit(): void {
    this.truckService.listenNonStoreTrucks().subscribe((res: Truck[]) =>{
      this.NonStoreTrucks = res;
    })
  }

}
