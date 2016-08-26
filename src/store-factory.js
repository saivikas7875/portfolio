import * as middlewareConfigurator from './middleware-configurator';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

let store;

const createStore = () => {

    const reducer = combineReducers({
        routing: routerReducer
    });

    return middlewareConfigurator.create(reducer);

};

export const getStore = () => {

    if (!store) {

        store = createStore();

    }

    return store;

};

export const destroyStore = () => {

    store = undefined;

};
