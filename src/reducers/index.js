import { combineReducers } from 'redux';
import testReducer from './testReducer';
import counterReducer from './counterReducer';

export default combineReducers({
    test: testReducer,
    counter: counterReducer
});