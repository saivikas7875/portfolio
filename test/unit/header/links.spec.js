import {Link} from 'react-router';
import Links from '../../../src/header/links';
import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';

describe('<Links/>', () => {

    let linksEl;

    beforeEach(() => {

        linksEl = shallow(<Links/>);

    });

    it('should be a section', () => {

        expect(linksEl.type()).string().equal('section');

    });

    it('should have a unique class name', () => {

        expect(linksEl.props().className).string().equal('links');

    });

    describe('list', () => {

        let linksListEl;

        beforeEach(() => {

            linksListEl = linksEl.childAt(0);

        });

        it('should be an unordered list', () => {

            expect(linksListEl.type()).string().equal('ul');

        });

        describe('home list item', () => {

            let homeListItemEl;

            beforeEach(() => {

                homeListItemEl = linksListEl.childAt(0);

            });

            it('should be a list item', () => {

                expect(homeListItemEl.type()).string().equal('li');

            });

            describe('home link', () => {

                let homeLinkEl;

                beforeEach(() => {

                    homeLinkEl = homeListItemEl.childAt(0);

                });

                it('should be using the <Link/> component', () => {

                    expect(homeLinkEl.type()).function().equal(Link);

                });

                it('should route to home', () => {

                    const expectedHomeRoute = '#/';

                    expect(homeLinkEl.props().to).string().equal(expectedHomeRoute);

                });

                it('should display the route as Home', () => {

                    expect(homeLinkEl.props().children).string().equal('Home');

                });

            });

        });

        describe('about list item', () => {

            let aboutListItemEl;

            beforeEach(() => {

                aboutListItemEl = linksListEl.childAt(1);

            });

            it('should be a list item', () => {

                expect(aboutListItemEl.type()).string().equal('li');

            });

            describe('about link', () => {

                let aboutLinkEl;

                beforeEach(() => {

                    aboutLinkEl = aboutListItemEl.childAt(0);

                });

                it('should be using the <Link/> component', () => {

                    expect(aboutLinkEl.type()).function().equal(Link);

                });

                it('should route to the about page', () => {

                    const expectedAboutRoute = '/about';

                    expect(aboutLinkEl.props().to).string().equal(expectedAboutRoute);

                });

                it('should display the route as About', () => {

                    expect(aboutLinkEl.props().children).string().equal('About');

                });

            });

        });

        describe('projects list item', () => {

            let projectsListItemEl;

            beforeEach(() => {

                projectsListItemEl = linksListEl.childAt(2);

            });

            it('should be a list item', () => {

                expect(projectsListItemEl.type()).string().equal('li');

            });

            describe('projects link', () => {

                let projectsLinkEl;

                beforeEach(() => {

                    projectsLinkEl = projectsListItemEl.childAt(0);

                });

                it('should be using the <Link/> component', () => {

                    expect(projectsLinkEl.type()).function().equal(Link);

                });

                it('should route to the projects page', () => {

                    const expectedProjectsRoute = '/projects';

                    expect(projectsLinkEl.props().to).string().equal(expectedProjectsRoute);

                });

                it('should display the route as Projects', () => {

                    expect(projectsLinkEl.props().children).string().equal('Projects');

                });

            });

        });

    });

});
