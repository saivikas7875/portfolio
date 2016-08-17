import Hapi from 'hapi';
import HapiReactViews from 'hapi-react-views';
import Vision from 'vision';
import WebpackPlugin from 'hapi-webpack-plugin';
import webpack from 'webpack';

import './babel';

const assets = {
    noInfo: true
};
const compiler = webpack(require('./webpack.config'));
const server = new Hapi.Server();

server.connection({
    host: '0.0.0.0',
    port: 5555,
    routes: {cors: true}
});

server.register(Vision, function (err) {

    if (err) {

        console.log(err);

    }

    server.views({
        engines: {
            js: HapiReactViews
        },
        compileOptions: {
            renderMethod: 'renderToString',
            useNodeJsx: false
        },
        relativeTo: __dirname,
        path: '.'
    });

});

server.register({

    register: WebpackPlugin,
    options: {
        compiler,
        assets
    }
}, () => {

    server.start(function () {

        console.log(`Server running at: http://localhost:${server.info.port}`);

    });

});
