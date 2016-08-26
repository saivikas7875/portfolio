import * as redux from 'redux';
import * as middlewareConfigurator from '../../src/middleware-configurator';
import * as storeFactory from '../../src/store-factory';
import {expect} from 'code';
import sinon from 'sinon';

describe('Given the app store factory', () => {

    let combineReducersStub,
        expectedCreatedStore,
        expectedReducer,
        middlewareConfiguratorStub,
        sandbox;

    const mockStoreConfigurator = () => {

        expectedCreatedStore = Object.freeze({});
        middlewareConfiguratorStub = sandbox.mock(middlewareConfigurator).expects('create');
        middlewareConfiguratorStub.returns(expectedCreatedStore);

    };

    const mockCombineReducers = () => {

        expectedReducer = Object.freeze({});
        combineReducersStub = sandbox.mock(redux).expects('combineReducers');
        combineReducersStub.returns(expectedReducer);

    };

    beforeEach(() => {

        sandbox = sinon.sandbox.create();

        mockStoreConfigurator();
        mockCombineReducers();

        storeFactory.destroyStore();

    });

    afterEach(() => {

        sandbox.restore();

    });

    after(() => {

        storeFactory.destroyStore();

    });

    describe('when getting the store', () => {

        describe('and no store exists', () => {

            it('should return new store created by store configurator', () => {

                const createdStore = storeFactory.getStore();

                expect(createdStore).equal(expectedCreatedStore);

            });

            it('should provide store factory with combined reducers', () => {

                middlewareConfiguratorStub.once().withExactArgs(expectedReducer);

                storeFactory.getStore();

                middlewareConfiguratorStub.verify();

            });

        });

        describe('and a store has already been created', () => {

            it('should return existing store', () => {

                storeFactory.getStore();

                middlewareConfiguratorStub.never();
                combineReducersStub.never();

                const returnedStore = storeFactory.getStore();

                expect(returnedStore).equal(expectedCreatedStore);
                middlewareConfiguratorStub.verify();
                combineReducersStub.verify();

            });

        });

    });

});
