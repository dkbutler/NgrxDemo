import { Truck } from '../Truck';
import * as TruckActions from './../actions/truck.actions';


export function reducer(state: Truck[] = [], action: TruckActions.Actions){
      switch(action.type){
          case TruckActions.ADD_TRUCK:
            return [...state, action.payload];
          case TruckActions.REMOVE_TRUCK:

            //state = [...state.splice(action.payload,1)]

              let removedItem=[...state].splice(action.payload,1);
              let newState=[...state].filter(element=> element!=removedItem[0]);

              return newState;

          default:
            return state;
      }
}
