import HomeContainer from '../../../src/home';
import HomeConnectedContainer from '../../../src/home/state-connector';
import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';

describe('Given the app container state connector', () => {

    let homeConnectedEl,
        fakeStore,
        rootState,
        testProps;

    beforeEach(() => {

        rootState = Object.freeze({

        });

        fakeStore = {
            dispatch: () => ({}),
            getState: () => rootState,
            subscribe: () => ({})
        };

        testProps = {
            routeParams: {},
            store: fakeStore
        };

        homeConnectedEl = shallow(<HomeConnectedContainer {...testProps}/> );

    });

    it('should be connecting <HomeContainer/>', () => {

        expect(homeConnectedEl.type()).function().equal(HomeContainer);

    });

});
