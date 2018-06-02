import React from 'react';
import NavBar from './../NavBar.jsx';
import RandomCard from './../RandomCard.jsx';
import RandomButton from './../RandomButton.jsx';

const WeaponPage = (props) => (
    <div>
        <NavBar/>
        <div className='generatorWrapper'>
            <div className='pageTitle'>Magic Weapon Generator</div>
            <RandomCard />
            <RandomButton />
        </div>
    </div>
)

export default WeaponPage;