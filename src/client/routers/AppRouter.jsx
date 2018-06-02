import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import WeaponPage from "./../components/pages/WeaponPage.jsx";
const weaponProps = {
    url: 'random-weapon',
    title: 'Random Weapon Generator'
}
const ruinsProps = {
    url: 'random-ruin',
    title: 'Random Ruins Generator'
}

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/ruins" render={() => <WeaponPage {...ruinsProps}/>}/>
                <Route path="/" render={() => <WeaponPage {...weaponProps} exact={true}/>}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;