import { createAction, props } from "@ngrx/store";

export interface Product {
    id: string;
    title: string;
    price: number;
}

export const addProduct = createAction(
    '[Product Page] AddProduct',
    props<{product: Product}>()
);