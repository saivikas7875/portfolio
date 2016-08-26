import * as reactRouterRedux from 'react-router-redux';
import * as redux from 'redux';
import * as middlewareConfiguratorService from '../../src/middleware-configurator';
import {expect} from 'code';
import sinon from 'sinon';
import thunk from 'redux-thunk';

describe('Given the middleware configurator service', () => {

    let expectedInitialState,
        expectedReducers,
        middlewareStoreCreator,
        sandbox,
        storeConstructor,
        stubStoreInstance;

    beforeEach(() => {

        expectedReducers = {};

        sandbox = sinon.sandbox.create();

        stubStoreInstance = sandbox.spy();

        middlewareStoreCreator = sandbox.mock().returns(stubStoreInstance);

        storeConstructor = sandbox.stub().returns(middlewareStoreCreator);

        sandbox.stub(redux, 'applyMiddleware').returns(storeConstructor);

        sandbox.stub(reactRouterRedux, 'routerMiddleware').returns(sandbox.stub());

    });

    afterEach(() => {

        sandbox.restore();

    });

    it('should use the thunk middleware to support async actions', () => {

        middlewareConfiguratorService.create(expectedReducers);

        sinon.assert.calledTwice(redux.applyMiddleware);
        sinon.assert.calledWith(redux.applyMiddleware, thunk);

    });

    it('should use the router middleware to support router actions', () => {

        middlewareConfiguratorService.create(expectedReducers);

        sinon.assert.calledTwice(redux.applyMiddleware);

        sinon.assert.calledWith(redux.applyMiddleware.getCall(1), reactRouterRedux.routerMiddleware());

    });

    it('should use the store creator with the thunk middleware', () => {

        middlewareConfiguratorService.create(expectedReducers);

        sinon.assert.calledTwice(storeConstructor);
        sinon.assert.calledWith(storeConstructor, redux.createStore);

    });

    it('should pass the reducers to the middleware store creator', () => {

        middlewareStoreCreator.once().withExactArgs(expectedReducers);

        middlewareConfiguratorService.create(expectedReducers, expectedInitialState);

        middlewareStoreCreator.verify();

    });

    it('should return the store instance', () => {

        expect(middlewareConfiguratorService.create(expectedReducers)).equal(stubStoreInstance);

    });

});
