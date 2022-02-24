import { Action, createAction, props, Store } from "@ngrx/store";

// export const login = createAction(
//     '[Login Page]Login',
//     props<{ username: string, passsword: string }>()
// );

// class way

export class Login implements Action {
    
    readonly type: string = '[Login Page] Login';

    constructor(public payload: { username: string, password: string }) {

    }
}

// loginFN(username, password) {
//     Store.dispatch(new Login({username: username, password: password}))
// }