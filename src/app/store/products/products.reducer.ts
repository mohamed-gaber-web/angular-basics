import { createReducer, on, props } from "@ngrx/store"
import { addProduct } from "./products.actions";

export interface State {
    productList: []
}

export const initialState = []


// export const productReducer = createReducer(
//     initialState,
//     on(addProduct, (state, { product } ) => {
//         return {

//             state: state.push()
//         }
//     } )
// );