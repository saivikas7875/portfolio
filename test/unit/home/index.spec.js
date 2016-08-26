import {FormattedMessage} from 'react-intl';
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

    describe('and the app-title', () => {

        let appTitleEl;

        beforeEach(() => {

            appTitleEl = homeContainerEl.childAt(0);

        });

        it('should be a section', () => {

            expect(appTitleEl.type()).string().equal('section');

        });

        it('should have a unique class name', () => {

            expect(appTitleEl.props().className).string().equal('app-title');

        });

        it('should be translated', () => {

            expect(appTitleEl.childAt(0).type()).function().equal(FormattedMessage);
            expect(appTitleEl.childAt(0).props().id).string().equal('PORTFOLIO');

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
