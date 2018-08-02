import React from 'react';
import FontAwesome from '@fortawesome/react-fontawesome';
import faUser from '@fortawesome/fontawesome-pro-light/faUser';
import faMap from '@fortawesome/fontawesome-pro-light/faMap';
import faBox from '@fortawesome/fontawesome-pro-light/faBoxFull';
import faWrench from '@fortawesome/fontawesome-pro-light/faWrench';
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
          <FontAwesome icon={faUser} className='browseSectionIcon' size='1x'/>
          People
        </div> 
        {/* Links */}
        <div className='browseSectionLink'><Link to="/404">Fighters</Link></div>
        <div className='browseSectionLink'><Link to="/404">Thieves</Link></div>
      </div>


      {/* Places */}
      <div className="browseSection">
        {/* Title */}
        <div className="browseSectionTitle titleUnderline">
          <FontAwesome icon={faMap} className='browseSectionIcon' size='1x'/>
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
          <FontAwesome icon={faBox} className='browseSectionIcon' size='1x'/>
          Things
        </div> 
        {/* Links */}
        <div className='browseSectionLink'><Link to="/weapons">Weapons</Link></div>
        <div className='browseSectionLink'><Link to="/trinkets">Trinkets</Link></div>
      </div>
    </div>

    {/* Tools */}
    
    <div className="browseSection">
    <FontAwesome icon={faWrench} className='browseTitleIcon' size='1x'/>
    <div className="browseTitle titleUnderline">Browse Tools</div>
      {/* Links */}
      <div className='browseSectionLink'><Link to="/404">Dice Roller</Link></div>
      <div className='browseSectionLink'><Link to="/404">Probability Calculator</Link></div>
      
    </div>

  </div>
)

export default BrowsePage;