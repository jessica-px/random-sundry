import React from 'react';
import { Link } from 'react-router-dom';

class NavBarScrollMenu extends React.Component{
  state = {
  }
  componentWillMount = () => {
  }

  render(){
    return(
    <div className="navBar--scrollMenu">
        <div className="navBar--scrollLinks">
            {/* Trinkets */}
            <Link to={'/trinkets'} key={'trinkets'} className='navBar--scrollLink'>
                <p>Trinket Generator</p>
            </Link>

            {/* Weapons */}
            <Link to={'/weapons'} key={'weapons'} className='navBar--scrollLink'>
                <p>Weapon Generator</p>
            </Link>

            {/* Ruins */}
            <Link to={'/ruins'} key={'ruins'} className='navBar--scrollLink'>
                <p>Ruins Generator</p>
            </Link>

            {/* Village */}
            <Link to={'/villages'} key={'villages'} className='navBar--scrollLink'>
                <p>Village Generator</p>
            </Link>

            {/* Adventurer */}
            <Link to={'/adventurers'} key={'adventurers'} className='navBar--scrollLink'>
                <p>Adventurer Generator</p>
            </Link>

            {/* See More */}
            <Link to={'/browse'} key={'browse'} className='navBar--scrollLink'>
                <p>See More</p>
            </Link>
        </div>
    </div>
    )
  }
}


export default NavBarScrollMenu;