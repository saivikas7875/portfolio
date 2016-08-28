import {FormattedMessage} from 'react-intl';
import Header from '../../../src/header';
import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';

describe('<Header/>', () => {

    let headerEl;

    beforeEach(() => {

        headerEl = shallow(<Header/>);

    });

    it('should be a section', () => {

        expect(headerEl.type()).string().equal('section');

    });

    it('should have a unique class name', () => {

        expect(headerEl.props().className).string().equal('header');

    });

    describe('app title', () => {

        let appTitleEl;

        beforeEach(() => {

            appTitleEl = headerEl.childAt(0);

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

});
