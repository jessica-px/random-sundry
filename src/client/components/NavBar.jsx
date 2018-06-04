import React from 'react';
import AccountButton from './AccountButton.jsx';
import DropdownBrowse from './DropdownBrowse.jsx';

const NavBar = (props) => (
    <div>
        <div className="navBar">
            <span className='navTitle'>RandomSundry</span>
            <span className='navButton ripple'>About</span>
            <DropdownBrowse />
            <AccountButton />
        </div>
    </div>
)

export default NavBar;