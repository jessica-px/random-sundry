import React from 'react';
import LoginWidget from './../LoginWidget.jsx';

class SignupPage extends React.Component{
    state = {
        cardHeaderSmall: 'text',
        cardBody: []
    }

    render(){
        return(
            <LoginWidget title={'Sign Up'} />
        )
    }
}

export default SignupPage;