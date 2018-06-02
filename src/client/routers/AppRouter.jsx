import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import WeaponPage from "./../components/pages/WeaponPage.jsx";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={WeaponPage} exact={true}/>      
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;