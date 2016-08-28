import {FormattedMessage} from 'react-intl';
import Header from '../../../src/header';
import Links from '../../../src/header/links';
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

    describe('main bar', () => {

        let mainBarEl;

        beforeEach(() => {

            mainBarEl = headerEl.childAt(0);

        });

        describe('app title', () => {

            let appTitleEl;

            beforeEach(() => {

                appTitleEl = mainBarEl.childAt(0);

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

        describe('Links', () => {

            it('should be using the <Links/> component', () => {

                const linksEl = mainBarEl.childAt(1);

                expect(linksEl.type()).function().equal(Links);

            });

        });

    });

    describe('section divider', () => {

        let sectionDividerEl;

        beforeEach(() => {

            sectionDividerEl = headerEl.childAt(1);

        });

        it('should be a <section/>', () => {

            expect(sectionDividerEl.type()).string().equal('section');

        });

    });

});
