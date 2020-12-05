import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Truck } from './Truck';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TruckService {

  constructor(private _http: HttpClient) { }

  private nonStoreTrucks$: Subject<Truck[]> = new Subject();

  listenNonStoreTrucks() {
    return this.nonStoreTrucks$.asObservable();
  }

  notifyChangeInNonStoreTrucks(trucks: Truck[]) {
    this.nonStoreTrucks$.next(trucks);
  }

  public getTrucks(): Observable<any> {
    return this._http.get<Truck[]>("https://localhost:44365/api/angularservice/GetTrucks");
  }

  updateTrucks(trucks): Observable<any> {
    return this._http.post<any>("https://localhost:44365/api/AngularService/UpdateTrucks", trucks);
  }

}
