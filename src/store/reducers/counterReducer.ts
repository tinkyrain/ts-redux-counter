import { counterActoin } from "../../types/type";
import { counterState } from "../../types/type";
import { PLUS_COUNT, MINUS_COUNT, ZERO_COUNT } from "../actions/counterActions";

const defaultState:counterState = {
    count: 0,
}

export const counterReducer = (state = defaultState, action:counterActoin):counterState => {
    switch(action.type){
        case PLUS_COUNT:
            return {...state, count: state.count+1};
        case MINUS_COUNT:
            return {...state, count: state.count-1};
        case ZERO_COUNT:
            return {...state, count: state.count=0};
        default:
            return state;
    }
}