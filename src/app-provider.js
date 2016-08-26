import React, {PropTypes} from 'react';
import {Router, hashHistory} from 'react-router';
import {IntlProvider} from 'react-intl';
import {Provider} from 'react-redux';
import messages from './i18n/en';
import appRoutes from './routes';
import {syncHistoryWithStore} from 'react-router-redux';

const AppProvider = ({store}) => {

    const history = syncHistoryWithStore(hashHistory, store);

    return (
        <IntlProvider
            locale='en'
            messages={messages}
        >
            <Provider store={store}>
                <Router
                    history={history}
                    routes={appRoutes}
                />
            </Provider>
        </IntlProvider>
    );

};

AppProvider.displayName = 'AppProvider';
AppProvider.propTypes = {
    store: PropTypes.object.isRequired
};

export default AppProvider;
