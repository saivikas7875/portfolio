import {applyMiddleware, compose, createStore} from 'redux';
import {hashHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';

export const create = reducers => {

    const router = routerMiddleware(hashHistory);

    /* istanbul ignore next */

    const middlewareStoreCreator = compose(
        applyMiddleware(thunk),
        applyMiddleware(router),
        window.devToolsExtension ?
            window.devToolsExtension() :
            f => f
    )(createStore);

    return middlewareStoreCreator(reducers);

};
