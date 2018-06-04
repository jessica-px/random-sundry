import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import GeneratorPage from "./../components/pages/GeneratorPage.jsx";
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
                <Route path="/ruins" render={() => <GeneratorPage {...ruinsProps}/>}/>
                <Route path="/" render={() => <GeneratorPage {...weaponProps} exact={true}/>}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;