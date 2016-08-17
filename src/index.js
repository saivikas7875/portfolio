import './index.scss';
import 'babel-core/polyfill';
import React from 'react';
import AppProvider from './app-provider';
import {getStore} from './store-factory';
import {render} from 'react-dom';

const store = getStore();

render(
    <AppProvider
        store={store}
    />,
    document.querySelector('.content')
);
