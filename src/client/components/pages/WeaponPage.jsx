import React from 'react';
import NavBar from './../NavBar.jsx';
import RandomCard from './../RandomCard.jsx';
import RandomButton from './../RandomButton.jsx';

class WeaponPage extends React.Component{
    state = {
        cardHeaderSmall: 'text',
        cardBody: []
    }

    // Randomize once on first render
    componentDidMount() {
        this.randomize();
    }

    randomize = () => {
        // Get random text from API
        // For now, we're using 'fake random' text
        const cardHeaderSmall = 'Shortsword, 1d6 piercing. Light, finesse.';
        const cardBody = [
            'This is a shortsword with a thin, blackened blade. It is engraved with a single rune.',
            'Attacks with this weapon can deal Necrotic damage.',
            'Rumor says it was once a gift for an orc warlord.'
        ];
        // Set state to new random text
        this.setState((prevState) => ({
            cardHeaderSmall: cardHeaderSmall,
            cardBody: cardBody
        }))
    }

    render(){
        return(
            <div>
                <NavBar/>
                    <div className='generatorWrapper'>
                    <div className='pageTitle'>Magic Weapon Generator</div>
                    <RandomCard {...this.state}/>
                    <RandomButton onClick={this.randomize}/>
                </div>
            </div>
        )
    }
}

export default WeaponPage;