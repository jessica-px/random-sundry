import React from 'react';
import Dropdown from './Dropdown.jsx';
import faUser from '@fortawesome/free-solid-svg-icons/faUser';


// Menu anatomy wokrs like this:
// Each dropdown has an array of sections
// Each section has an optional header (displayed in smaller, grey font)
// Each section also has an array of links
// Each link is an object with a name and a url

// The dropdown looks at each section, builds a header if present, then looks at each link
// and builds a clickable html button with the link's name and url

const DropdownSignup = (props) => (
  
    <Dropdown 
      class="navbar--hideWhenWide"
      button=''
      icon={faUser}
      sections={[
        {
          header: '',
          links: [
            {name: 'Sign Up', url: '/signup'},
            {name: 'Login', url: '/login'}
          ]
        }
      ]}
    />
  
)


export default DropdownSignup;