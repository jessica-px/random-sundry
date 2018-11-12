import React from 'react';
import { Link } from 'react-router-dom';

const HomeButton = () => (
  <span className='navTitle'>
    <Link to="/"><span className='navButton ripple'>RandomSundry</span></Link>
  </span>

)

export default HomeButton;