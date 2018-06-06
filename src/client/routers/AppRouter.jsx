import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

// Nav Bar (rendered on every page)
import NavBar from './../components/NavBar.jsx'

// Pages
import HomePage from './../components/pages/HomePage.jsx'
import AboutPage from './../components/pages/AboutPage.jsx'
import PageNotFound from './../components/pages/PageNotFound.jsx'

// The generators are made by combining these props with the GeneratorPage template
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
            <NavBar />
            <Switch>
                <Route path="/weapons" render={() => <GeneratorPage {...weaponProps}/>}/>
                <Route path="/ruins" render={() => <GeneratorPage {...ruinsProps}/>}/>
                <Route path="/about" exact component={AboutPage}/>
                <Route path="/" exact component={HomePage}/>
                <Route path='*' component={PageNotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;