import Projects from '../../../src/projects';
import {expect} from 'code';
import {match} from 'react-router';
import route from '../../../src/routes/projects';

describe('Projects route', () => {

    let matchedRoutes;

    beforeEach(() => {

        match({
            location: '/projects',
            routes: route
        }, (err, redirectLocation, renderProps) => {

            matchedRoutes = renderProps;

        });

    });

    it('should exist', () => {

        expect(matchedRoutes).exist();

    });

    it('should have a component', () => {

        expect(matchedRoutes.routes[0].component).function().equal(Projects);

    });

    it('should have a name', () => {

        expect(matchedRoutes.routes[0].name).string().equal('Projects');

    });

    it('should have a path', () => {

        expect(matchedRoutes.routes[0].path).string().equal('/projects');

    });

});
