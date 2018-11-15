import React from 'react';
import RandomCard from './../RandomCard.jsx';
import BigButton from './../BigButton.jsx';

class GeneratorPage extends React.Component{
    state = {
      header: '',
      subheader: '',
      body: [],
      category: '',
      subcategory: ''
    }

    // Randomize once on first render of generator
    componentDidMount() {
      const url = '/api/random/' + this.props.url;
      this.randomize(url);
    }

    // Randomize on props updates (when swapping between generators)
    UNSAFE_componentWillReceiveProps(newProps){
      const url = '/api/random/' + newProps.url;
      this.randomize(url);
    }

    randomize = (url) => {
      if (typeof url !== "string"){
        url = '/api/random/' + this.props.url;
        console.log(url);
      }
      console.log(url);
      fetch(url, {
        method: 'GET'
      }).then((response) => {
        //console.log(response);
        response.json().then((data) =>{
          console.log(data);
          this.showCardText(data);
        });
      }).catch((err) => {
        console.log(err);
      })
    }

    showCardText = (random) => {
      // Set state properties to match those generated in API
      this.setState({
        ...random
      })
    }

    render(){
      return(

        <div className='generatorWrapper'>
          <div className='pageTitle'>{this.props.title}</div>
          <RandomCard {...this.state}/>
          <BigButton onClick={this.randomize} label={'Randomize'}/>
        </div>

      )
    }
}

export default GeneratorPage;