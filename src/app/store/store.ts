import { ActionReducerMap } from "@ngrx/store";
import { Counter, counterReducerTow } from "./counter_2/couner2.reducer";

export interface StoreCounterInterface { // StoreCounterInterface => interface reducer in root  
    count_2: Counter; // Counter // interface state
}

// all reucers exports
export const reducers: ActionReducerMap<any> = {
    count_2: counterReducerTow,
    // productStore: productReducer
}
