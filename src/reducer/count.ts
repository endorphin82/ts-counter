import { INCREMENT, DECREMENT } from '../ac/types';
import {ActionsTypes} from '../store'

export type initialState = typeof initialState

const initialState = {
    count: 0
}

export default (state = initialState, action: ActionsTypes): initialState => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + action.payload
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - action.payload
            }
        default:
            return state
    }
}