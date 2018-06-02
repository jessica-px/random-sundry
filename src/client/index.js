import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter.jsx';

import styles from './styles/styles.scss';

console.log('Loading index.js');

const jsx = (
    <div>
        <AppRouter />
    </div>
)

const appRoot = document.getElementById('root');
ReactDOM.render(jsx, appRoot);