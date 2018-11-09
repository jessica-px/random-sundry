import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/pro-light-svg-icons/faUser';
import {faMap} from '@fortawesome/pro-light-svg-icons/faMap';
import {faBoxFull} from '@fortawesome/pro-light-svg-icons/faBoxFull';
import {faWrench} from '@fortawesome/pro-light-svg-icons/faWrench';
import { Link } from 'react-router-dom';

const BrowsePage = (props) => (
  <div className='browsePageWrapper'>
 
    {/* Generators */}
    <div className="browseTitle">Browse Generators</div>

    <div className="browseSectionWrapper">
      {/* People */}
      <div className="browseSection">
        {/* Title */}
        <div className="browseSectionTitle titleUnderline">
          <FontAwesomeIcon icon={faUser} className='browseSectionIcon' size='1x'/>
          People
        </div> 
        {/* Links */}
        <div className='browseSectionLink'><Link to="/innkeepers">Innkeepers</Link></div>
        <div className='browseSectionLink'><Link to="/thieves">Thieves</Link></div>
      </div>


      {/* Places */}
      <div className="browseSection">
        {/* Title */}
        <div className="browseSectionTitle titleUnderline">
          <FontAwesomeIcon icon={faMap} className='browseSectionIcon' size='1x'/>
          Places
        </div> 
        {/* Links */}
        <div className='browseSectionLink'><Link to="/ruins">Ruins</Link></div>
        <div className='browseSectionLink'><Link to="/villages">Villages</Link></div>
      </div>


      {/* Things */}
      <div className="browseSection">
        {/* Title */}
        <div className="browseSectionTitle titleUnderline">
          <FontAwesomeIcon icon={faBoxFull} className='browseSectionIcon' size='1x'/>
          Things
        </div> 
        {/* Links */}
        <div className='browseSectionLink'><Link to="/weapons">Weapons</Link></div>
        <div className='browseSectionLink'><Link to="/trinkets">Trinkets</Link></div>
      </div>
    </div>

    {/* Tools */}
    
    <div className="browseSection">
    <FontAwesomeIcon icon={faWrench} className='browseTitleIcon' size='1x'/>
    <div className="browseTitle titleUnderline">Browse Tools</div>
      {/* Links */}
      <div className='browseSectionLink'><Link to="/dice">Dice Roller</Link></div>
      <div className='browseSectionLink'><Link to="/calculator">Probability Calculator</Link></div>
      
    </div>

  </div>
)

export default BrowsePage;