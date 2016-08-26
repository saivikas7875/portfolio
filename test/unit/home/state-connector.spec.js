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
            getState: () => rootState,
            subscribe: () => ({}),
            dispatch: () => ({})
        };

        testProps = {
            store: fakeStore,
            routeParams: {}
        };

        homeConnectedEl = shallow(<HomeConnectedContainer {...testProps}/> );

    });

    it('should be connecting <HomeContainer/>', () => {

        expect(homeConnectedEl.type()).function().equal(HomeContainer);

    });

});
