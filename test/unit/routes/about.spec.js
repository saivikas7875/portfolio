import About from '../../../src/about';
import {expect} from 'code';
import {match} from 'react-router';
import route from '../../../src/routes/about';

describe('About route', () => {

    let matchedRoutes;

    beforeEach(() => {

        match({
            location: '/about',
            routes: route
        }, (err, redirectLocation, renderProps) => {

            matchedRoutes = renderProps;

        });

    });

    it('should exist', () => {

        expect(matchedRoutes).exist();

    });

    it('should have a component', () => {

        expect(matchedRoutes.routes[0].component).function().equal(About);

    });

    it('should have a name', () => {

        expect(matchedRoutes.routes[0].name).string().equal('About');

    });

    it('should have a path', () => {

        expect(matchedRoutes.routes[0].path).string().equal('/about');

    });

});
