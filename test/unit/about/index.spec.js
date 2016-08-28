import About from '../../../src/about';
import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';

describe('<About/>', () => {

    let aboutEl;

    beforeEach(() => {

        aboutEl = shallow(<About/>);

    });

    it('should be a section', () => {

        expect(aboutEl.type()).string().equal('section');

    });

    it('should have a unique class name', () => {

        expect(aboutEl.props().className).string().equal('about');

    });

    it('should display about data', () => {

        expect(aboutEl.props().children).string().equal('About');

    });

});
