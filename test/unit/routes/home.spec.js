import HomeContainer from '../../../src/home/state-connector';
import {expect} from 'code';
import {match} from 'react-router';
import route from '../../../src/routes/home';

describe('Home container route', () => {

    let matchedRoutes;

    beforeEach(() => {

        match({
            routes: route,
            location: '/'
        }, (err, redirectLocation, renderProps) => {

            matchedRoutes = renderProps;

        });

    });

    it('should exist', () => {

        expect(matchedRoutes).exist();

    });

    it('should have a component', () => {

        expect(matchedRoutes.routes[0].component).function().equal(HomeContainer);

    });

    it('should have a name', () => {

        expect(matchedRoutes.routes[0].name).string().equal('HOME');

    });

    it('should have a path', () => {

        expect(matchedRoutes.routes[0].path).string().equal('/');

    });

});
