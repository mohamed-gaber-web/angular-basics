import { createAction, props } from "@ngrx/store";

export const increment = createAction('[ Component Counter ] Increment'); // Action name
export const decrement = createAction('Decrement');
export const reset = createAction('Reset');


// Action

// name.actions.ts
// createAction

interface Action {
    type: string;
}

// {
//     type: '[Login Page] Login',
//     username: string;
//     password: string;
// }

// export const login = createAction(
//     '[Login Page] Login',
//     props<{ username: string, password: string }>()
// )

// function onLogin(username: string, password: string) {
//     store.dispatch(login({ username: username, password: password }))
// }

