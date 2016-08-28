import Header from '../../../src/header';
import HomeContainer from '../../../src/home';
import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';

describe('<HomeContainer/>', () => {

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

    it('should have a unique class name', () => {

        expect(homeContainerEl.props().className).string().equal('home-container');

    });

    describe('and the header', () => {

        let headerEl;

        beforeEach(() => {

            headerEl = homeContainerEl.childAt(0);

        });

        it('should be using the <Header/> component', () => {

            expect(headerEl.type()).function().equal(Header);

        });

    });

    describe('and the app body', () => {

        let appBodyEl;

        beforeEach(() => {

            appBodyEl = homeContainerEl.childAt(1);

        });

        it('should be a section', () => {

            expect(appBodyEl.type()).string().equal('section');

        });

        it('should have a unique class name', () => {

            expect(appBodyEl.props().className).string().equal('app-body');

        });

        it('should display the app content', () => {

            expect(appBodyEl.props().children).equal(testProps.children);
        });

    });

});
