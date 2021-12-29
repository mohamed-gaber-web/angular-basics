import { Action, createReducer, on } from "@ngrx/store";

import { addArr } from "./arr.actions";

interface productState {
    products: {
        id: string;
        name: string;
    }
}

let initialState: any = {
    products: [
        {
            id: '1',
            name: ''
        }
    ]
};

const addProduct = createReducer(
    initialState,
    on(addArr, (state) => state.products.push({ id: 2, productName: 'new product' }))
);

export function productReducer(state: any, action: Action) {
    return addProduct(state, action);
}