import React from 'react';
import IconButton from './../IconButton.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/pro-light-svg-icons/faHome';
import {faBookOpen} from '@fortawesome/pro-light-svg-icons/faBookOpen';
import {faHammer} from '@fortawesome/pro-light-svg-icons/faHammer';

const ConstructionPage = () => (
  <div className='pageNotFoundWrapper'>
    <div className='centerImage'>
      <FontAwesomeIcon icon={faHammer} className='' size='4x'/>
    </div>
    <div className='center404Text'>
      <p>Sorry, this page isn&apos;t ready yet!</p>
      <p>Here&apos;s some other places you can go:</p>
    </div>
    <div className="pageNotFoundButtons">
      <IconButton label='Home' url='/' icon={faHome} />
      <IconButton label='Browse' url='browse' icon={faBookOpen} />
    </div>  

  </div>
)

export default ConstructionPage;