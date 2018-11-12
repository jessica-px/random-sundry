import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/pro-light-svg-icons/faChevronDown';

// Menu anatomy wokrs like this:
// Each dropdown has (as a prop) an array of sections
// Each section has an optional header (displayed in smaller, grey font)
// Each section also has an array of links
// Each link is an object with a name and a url

// The dropdown looks at each section, builds a header if present, then looks at each link
// and builds a clickable html button with the link's name and url


// Props
// options = string array, eg. ['People', 'Places', 'Things']
// on selectOption, returns string to parent


class SelectDropdown extends React.Component{
  state = {
    showMenu: false,
    selected: 'Show All'
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

  selectOption = (selected) => {
    this.hideMenu();
    this.setState(() => ({
      selected
    }))
    this.props.parentFunc(selected);
  }

  render(){
    return(
      <div className='dropdown'>
        {/* button */}
        <div className="selectDropdown" onClick={this.onClickHandler}>
          {this.state.selected + ' '}
          <FontAwesomeIcon icon={faChevronDown} size='xs'/>
        </div>

        {/* menu */}
        {this.state.showMenu &&
          <div className="dropdown--menu card">
            {this.props.options.map((option, index)=> {
              return(
                <button 
                  className='dropdown--button navButton' 
                  key={index}
                  onClick={() => this.selectOption(option)}
                >
                  {option}
                </button>
              );
            })}
            
          </div>
        }
          
      </div>
    )
  }
}

export default SelectDropdown;