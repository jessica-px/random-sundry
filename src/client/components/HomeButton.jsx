import React from 'react';
import AccountButton from './AccountButton.jsx';
import DropdownBrowse from './DropdownBrowse.jsx';
import { Link } from 'react-router-dom';

const HomeButton = (props) => (
    <span className='navTitle'>
        <Link to="/"><span className='navButton ripple'>RandomSundry</span></Link>
    </span>

)

export default HomeButton;