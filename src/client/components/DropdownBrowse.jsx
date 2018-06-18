import React from 'react';
import Dropdown from './Dropdown.jsx';


// Menu anatomy wokrs like this:
// Each dropdown has an array of sections
// Each section has an optional header (displayed in smaller, grey font)
// Each section also has an array of links
// Each link is an object with a name and a url

// The dropdown looks at each section, builds a header if present, then looks at each link
// and builds a clickable html button with the link's name and url

const DropdownBrowse = (props) => (
    <div>
        <Dropdown 
            button='Browse'
            sections={[
                {
                    header: 'Items',
                    links: [
                        {name: 'Magic Weapons', url: '/weapons'},
                        {name: 'Magic Armor', url: '/armor'}
                    ]
                },
                {
                    header: 'Places',
                    links: [
                        {name: 'Ruins', url: '/ruins'},
                        {name: 'Villages', url: '/villages'}
                    ]
                }

            ]}
        />
    </div>
)

export default DropdownBrowse;