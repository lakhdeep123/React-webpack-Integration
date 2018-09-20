import { INCREMENT_ADULT, DECREMENT_ADULT,CHECK_ERROR } from '../actions/types';

const initialState = {}

export default function(state = initialState, action) {
    debugger;
    switch(action.type) {
        case INCREMENT_ADULT:
            return {
                ...state,
                adult: action.payload
            }
        case DECREMENT_ADULT:
            return {
                ...state,
                adult: action.payload
            }
            case CHECK_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}