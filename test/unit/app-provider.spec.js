import * as reactRouterRedux from 'react-router-redux';
import AppProvider from '../../src/app-provider';
import {IntlProvider} from 'react-intl';
import {Provider} from 'react-redux';
import React from 'react';
import {expect} from 'code';
import {hashHistory} from 'react-router';
import messages from '../../src/i18n/en';
import sinon from 'sinon';
import {shallow} from 'enzyme';

describe('<AppProvider/>', () => {

    let appProviderEl,
        routerReducerStub,
        sandbox,
        testProps;

    const getTestProps = () => {

        routerReducerStub = sandbox.stub();

        return {

            store: {
                dispatch: sandbox.stub(),
                getState: sandbox.stub().returns({routing: routerReducerStub}),
                subscribe: sandbox.stub()

            }

        };

    };

    beforeEach(() => {

        sandbox = sinon.sandbox.create();

        sandbox.stub(reactRouterRedux, 'syncHistoryWithStore');

        testProps = getTestProps();

        appProviderEl = shallow(<AppProvider {...testProps}/>);

    });

    afterEach(() => {

        sandbox.restore();

    });

    describe('and the <IntlProvider/>', () => {

        it('should be the root component', () => {

            expect(appProviderEl.type()).function().equal(IntlProvider);

        });

        it('should have a locale', () => {

            expect(appProviderEl.props().locale).string().equal('en');

        });

        it('should have a messages object', () => {

            expect(appProviderEl.props().messages).object().deep.equal(messages);

        });

    });

    describe('and the <Provider/>', () => {

        let providerEl;

        beforeEach(() => {

            providerEl = appProviderEl.childAt(0);

        });

        it('should be using Provider', () => {

            expect(providerEl.type()).function().equal(Provider);

        });

        it('should have a store', () => {

            expect(providerEl.props().store).equal(testProps.store);

        });

        it('should have a routing object from react-router-redux as part of the state', () => {

            expect(providerEl.props().store.getState().routing).function();

        });

        it('should sync the hash history with the store', () => {

            sinon.assert.calledOnce(reactRouterRedux.syncHistoryWithStore);
            sinon.assert.calledWithExactly(reactRouterRedux.syncHistoryWithStore, hashHistory, testProps.store);

        });

    });

});
