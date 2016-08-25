import HomeContainer from '../../../src/home';
import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';

describe('Given the <HomeContainer/> component', () => {

	let homeContainerEl,
		testProps;

	beforeEach(() => {

		testProps = Object.freeze({
            children: <div></div>,
            params: {},
            routes: []
		});

		homeContainerEl = shallow(<HomeContainer {...testProps}/>);

	});

    it('should be a section', () => {

        expect(homeContainerEl.type()).string().equal('section');

    });

});
