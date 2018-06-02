import React from 'react';
import AccountButton from './AccountButton.jsx';

const NavBar = (props) => (
    <div>
        <div className="navBar">
            <span className='navTitle'>RandomSundry</span>
            <span className='navButton ripple'>About</span>
            <span className='navButton ripple'>Browse</span>
            <AccountButton />
        </div>
    </div>
)

export default NavBar;