import { CustomeAction, DECREMENT, INCREMENT } from "./counter2.actions";

export interface Counter {
    count: number;
    change: number;
}

let initialState: Counter = {
    count: 0,
    change: 0
};

export function counterReducerTow(state = initialState, action: CustomeAction) {
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + action.countNum
            }
        case DECREMENT:
            return {
                count: state.count <= 0 ? 0 : state.count - action.countNum
            }
        
        default: 
            return state
    }
}

