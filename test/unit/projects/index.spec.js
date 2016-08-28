import Projects from '../../../src/projects';
import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';

describe('<Projects/>', () => {

    let projectsEl;

    beforeEach(() => {

        projectsEl = shallow(<Projects/>);

    });

    it('should be a section', () => {

        expect(projectsEl.type()).string().equal('section');

    });

    it('should have a unique class name', () => {

        expect(projectsEl.props().className).string().equal('projects');

    });

    it('should display projects data', () => {

        expect(projectsEl.props().children).string().equal('Projects');

    });

});
