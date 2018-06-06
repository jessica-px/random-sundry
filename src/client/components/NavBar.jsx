import React from 'react';
import AccountButton from './AccountButton.jsx';
import DropdownBrowse from './DropdownBrowse.jsx';
import HomeButton from './HomeButton.jsx';
import AboutButton from './AboutButton.jsx';

const NavBar = (props) => (
    <div>
        <div className="navBar">
            <HomeButton />
            <AboutButton />
            <DropdownBrowse />
            <AccountButton />
        </div>
    </div>
)

export default NavBar;