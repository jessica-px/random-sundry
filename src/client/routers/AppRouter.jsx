import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

// Nav Bar (rendered on every page)
import NavBar from './../components/NavBar.jsx'

// General Pages
import HomePage from './../components/pages/HomePage.jsx'
import AboutPage from './../components/pages/AboutPage.jsx'
import BrowsePage from './../components/pages/BrowsePage.jsx'
import SignupPage from './../components/pages/SignupPage.jsx'
import LoginPage from './../components/pages/LoginPage.jsx'
import SettingsPage from './../components/pages/SettingsPage.jsx'
import ConstructionPage from './../components/pages/ConstructionPage.jsx'
import PageNotFound from './../components/pages/PageNotFound.jsx'

// User pgaes
import UserFavesPage from './../components/pages/UserFavesPage.jsx'
import LogOutPage from './../components/pages/LogOutPage.jsx'

// Generators
// Made by passing props to the generic GeneratorPage template
import GeneratorPage from "./../components/pages/GeneratorPage.jsx";
const weaponProps = {
    url: 'weapon',
    title: 'Random Weapon Generator'
}
const ruinsProps = {
    url: 'ruin',
    title: 'Random Ruins Generator'
}
const villagesProps = {
    url: 'village',
    title: 'Random Villages Generator'
}

const AppRouter = () => (
    <BrowserRouter>
        <div className='page'>
            <NavBar />
            <Switch>
                {/* General Navigation */}
                <Route path="/" exact component={HomePage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/browse" component={BrowsePage}/>
                <Route path="/signup" exact component={SignupPage}/>
                <Route path="/login" exact component={LoginPage}/>
                <Route path="/settings" exact component={SettingsPage}/>

                {/* Generators */}
                  {/* People */}
                  <Route path="/innkeepers" exact component={ConstructionPage}/>
                  <Route path="/thieves" exact component={ConstructionPage}/>}/>
                    {/* Places */}
                  <Route path="/ruins" render={() => <GeneratorPage {...ruinsProps}/>}/>
                  <Route path="/villages" render={() => <GeneratorPage {...villagesProps}/>}/>
                    {/* Things */}
                  <Route path="/weapons" render={() => <GeneratorPage {...weaponProps}/>}/>
                  <Route path="/trinkets" exact component={ConstructionPage}/>

                {/* Tools */}
                <Route path="/dice" exact component={ConstructionPage}/>
                <Route path="/calculator" exact component={ConstructionPage}/>

                {/* User Pages */}
                <Route path="/faves" exact component={UserFavesPage}/>
                <Route path="/logout" exact component={LogOutPage}/>
                {/* 404 Page */}
                <Route path='*' component={PageNotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;