import React from 'react';
import AccountButton from './AccountButton.jsx';
import DropdownBrowse from './DropdownBrowse.jsx';
import { Link } from 'react-router-dom';

const AboutButton = (props) => (
    <Link to="/about"><div className='navButton ripple'>About</div></Link>
)

export default AboutButton;