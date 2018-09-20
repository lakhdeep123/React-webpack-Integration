import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import createLogger from 'redux-logger';

const initialState = {
    counter: {
        value: 0,
        adult:0,
        children:0,
        infant:0,
        error:false
    }
};

const middleware = [thunk, createLogger];

const store = createStore(
    rootReducer, 
    initialState, 
    compose (
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

export default store;
