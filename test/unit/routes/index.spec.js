import Home from '../../../src/home/state-connector';
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

    });

});
