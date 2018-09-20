import {INCREMENT_ADULT, DECREMENT_ADULT,CHECK_ERROR} from './types';


const INCREMENT_ADULT_ACTION = value => {
    return {
        type: INCREMENT_ADULT,
        payload: value
    }
}

const CHECK_ERROR_ACTION = value => {
    return {
        type: CHECK_ERROR,
        payload: value
    }
}

const DECREMENT_ADULT_ACTION = value => {
    return {
        type: DECREMENT_ADULT,
        payload: value
    }
}

export const adultIncrement = actiontype => (dispatch, getState) => {
    debugger;
    const value = getState().counter.adult + 1;
    var total= parseInt(getState().counter.adult)+parseInt(getState().counter.children)+parseInt(getState().counter.infant);
    debugger;
    if(total>=9)
    {

       var val = getState().counter.error=true;
       dispatch(CHECK_ERROR_ACTION(val));
    }

 else
    dispatch(INCREMENT_ADULT_ACTION(value));
}

export const adultDecrement = () => (dispatch, getState) => {
    const value = getState().counter.adult - 1;
    dispatch(DECREMENT_ADULT_ACTION(value));
}


