import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from '@fortawesome/react-fontawesome';

// Menu anatomy wokrs like this:
// Each dropdown has (as a prop) an array of sections
// Each section has an optional header (displayed in smaller, grey font)
// Each section also has an array of links
// Each link is an object with a name and a url

// The dropdown looks at each section, builds a header if present, then looks at each link
// and builds a clickable html button with the link's name and url


class Dropdown extends React.Component{
  state = {
    showMenu: false,
  }

  // On click, show menu
  onClickHandler = (e) => {
    e.preventDefault();
    this.showMenu();
  }

  showMenu = () => {
    this.setState({ showMenu: true });
    document.addEventListener('click', this.hideMenu)
  }

  hideMenu = () => {
    this.setState({ showMenu: false });
    document.removeEventListener('click', this.hideMenu);
  }


  render(){
    return(
        <div className={'dropdown' + ' ' + this.props.class}>
          {/* button */}
          <div className='navButton ripple' onClick={this.onClickHandler}>
            {this.props.button}
            {this.props.icon &&  <FontAwesome icon={this.props.icon} />}
          </div>

          {/* menu */}
          {this.state.showMenu &&
            <div className="dropdown--menu card">
              {this.props.sections.map(section => {
                return [renderHeader(section), renderLinks(section)];
              })}
              
            </div>
          }
            
        </div>
      )
    }
}

export default Dropdown;

// Renders section headers ('Items, Places')
const renderHeader = (section) => {
  if (section.header !== ''){
    return <div className="dropdown--header" key={section.header}>{section.header}</div>      
  }
  return '';
}

// Renders actual menu items as links
const renderLinks = (section) => {
  return section.links.map(link => {
    return(
      <Link to={link.url} key={link.url}><button className='dropdown--button navButton'>
        {link.name}
      </button></Link>
    )
  })
}