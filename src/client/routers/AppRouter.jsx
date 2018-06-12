import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

// Nav Bar (rendered on every page)
import NavBar from './../components/NavBar.jsx'

// Pages
import HomePage from './../components/pages/HomePage.jsx'
import AboutPage from './../components/pages/AboutPage.jsx'
import SignupPage from './../components/pages/SignupPage.jsx'
import LoginPage from './../components/pages/LoginPage.jsx'
import LogOutPage from './../components/pages/LogOutPage.jsx'
import PageNotFound from './../components/pages/PageNotFound.jsx'

// Generators
// Made by passing props to the generic GeneratorPage template
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
        <div className='page'>
            <NavBar />
            <Switch>
                {/* General Navigation */}
                <Route path="/" exact component={HomePage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/signup" exact component={SignupPage}/>
                <Route path="/login" exact component={LoginPage}/>
                {/* Generators */}
                <Route path="/weapons" render={() => <GeneratorPage {...weaponProps}/>}/>
                <Route path="/ruins" render={() => <GeneratorPage {...ruinsProps}/>}/>
                {/* User Pages */}
                <Route path="/logout" exact component={LogOutPage}/>
                {/* 404 Page */}
                <Route path='*' component={PageNotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;