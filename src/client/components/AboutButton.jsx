import React from 'react';
import { Link } from 'react-router-dom';

const AboutButton = () => (
  <Link to="/about"><div className='navButton ripple'>About</div></Link>
)

export default AboutButton;