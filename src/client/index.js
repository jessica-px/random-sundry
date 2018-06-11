import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter.jsx';

import styles from './styles/styles.scss';

console.log('Loading index.js');

const store = configureStore();

const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
)

const appRoot = document.getElementById('root');
ReactDOM.render(jsx, appRoot);