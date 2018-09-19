import { TEST_TYPE } from '../actions/types';

const TEST_ACTION = value => ({

   
    type: TEST_TYPE,
    payload: value
});

export const testAction = () => (dispatch, getState) => {

    debugger;
    const newValue = !getState().test.value;
    dispatch(TEST_ACTION(newValue));
}