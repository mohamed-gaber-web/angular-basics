import { Action, createAction, createReducer, on, props, State } from "@ngrx/store";
import { IProduct } from "../model/product.model";

// action
export const ADD_PRODUCT = createAction(
    '[Add Product Page] Add Product', 
    props<{name: string, price: number}>()
    );

export const intialState = [];


const _productReducer = createReducer(
    intialState,
    on(ADD_PRODUCT, (state) => [...state])
)


export function productReducerTest(state = intialState, action: Action) {
    return _productReducer(state, action)
}