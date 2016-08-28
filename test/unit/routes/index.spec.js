import About from '../../../src/about';
import Home from '../../../src/home/state-connector';
import Projects from '../../../src/projects';
import {expect} from 'code';
import {match} from 'react-router';
import routes from '../../../src/routes';

describe('Given the routes', () => {

    describe('when on /', () => {

        let matchedRoutes;

        beforeEach(() => {

            match({
                location: '/',
                routes
            }, (err, redirectLocation, renderProps) => {

                matchedRoutes = renderProps;

            });

        });

        it('should have a match', () => {

            expect(matchedRoutes).exist();

        });

        it('should have an home route', () => {

            const indexRoute = matchedRoutes.routes[0];

            expect(indexRoute).exist();
            expect(indexRoute.component).function().equal(Home);

        });

        it('should have a child about route', () => {

            const aboutRoute = matchedRoutes.routes[0].childRoutes[0];

            expect(aboutRoute).exist();
            expect(aboutRoute.component).function().equal(About);

        });

        it('should have a child projects route', () => {

            const projectsRoute = matchedRoutes.routes[0].childRoutes[1];

            expect(projectsRoute).exist();
            expect(projectsRoute.component).function().equal(Projects);

        });

    });

});
