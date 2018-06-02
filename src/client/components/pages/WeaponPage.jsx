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
        const url = 'http://localhost:8080/api/' + this.props.url;
        fetch(url, {
            method: 'GET'
        }).then((response) => {
            console.log(response);
            response.json().then((data) =>{
                this.showCardText(data);
            });
        }).catch((err) => {
            console.log(err);
        })
    }

    showCardText = (random) => {
        // Set state to new random text
        this.setState((prevState) => ({
            cardHeader: random.header,
            cardHeaderSmall: random.smallHeader,
            cardBody: random.body
        }))
    }

    render(){
        return(
            <div>
                <NavBar/>
                    <div className='generatorWrapper'>
                    <div className='pageTitle'>{this.props.title}</div>
                    <RandomCard {...this.state}/>
                    <RandomButton onClick={this.randomize}/>
                </div>
            </div>
        )
    }
}

export default WeaponPage;