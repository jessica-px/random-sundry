import React from 'react';
import { Route, Redirect } from 'react-router'

class LinkButton extends React.Component{
  state = {
    redirect: false
  }

  redirect = () => {
    this.setState((prevState) => ({
      redirect: true
    }))
  }

  render(){
    return(
      <div className={'button button--big ripple '+ this.props.className} onClick={this.redirect}>
       {this.props.label}
       {this.state.redirect && <Redirect to={this.props.url} />}
      </div>
      
    )
  }
}

export default LinkButton;