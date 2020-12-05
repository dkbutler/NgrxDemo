import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Truck } from '../Truck';

export const ADD_TRUCK    = '[TRUCK] Add'
export const REMOVE_TRUCK = '[TRUCK] Remove'

export class AddTruck implements Action {
   readonly type = ADD_TRUCK

   constructor(public payload: Truck){}
}

export class RemoveTruck implements Action {
  readonly type = REMOVE_TRUCK

  constructor(public payload: number){}
}

export type Actions = AddTruck | RemoveTruck
