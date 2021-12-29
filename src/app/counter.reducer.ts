import { Action, createReducer, on } from "@ngrx/store";

import { increment, decrement, reset } from "./counter.action";

// interface State {
//     countNumber: number;
// }

let initialState: number = 0;

const _counterReducer = createReducer(
    initialState,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(reset, () => 0)
);

export function counterReducer(state: any, action: Action) {
    return _counterReducer(state, action);
}


/**
 * REDUCER 
 * is pure function action type
 * handling from first state and the next state in your application
 * action - state - return new state or original state
 */