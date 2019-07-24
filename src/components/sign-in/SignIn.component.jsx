import React, { Component } from 'react';

import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';

import { signInWithGoogle} from '../../firebase/firebase.utils';

import './SignIn.styles.scss';

class SignIn extends Component {
    state = { 
        email: "",
        password: ""
     }

    handleChange = (e) => {
        
        const {name, value} = e.target;

        this.setState({
            [name]: value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            email: "",
            password: ""
        })
    }
    
    render() { 
        return ( 
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email or password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    label="email"
                    name='email' 
                    type="email" 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    required />
                    
                    <FormInput 
                    label="password"
                    name='password' 
                    type="password" 
                    handleChange={this.handleChange}
                    value={this.state.password} 
                    required />
                    <div className="buttons">
                        <CustomButton type="submit" >SIGN IN</CustomButton>
                        <CustomButton isGoogleSignIn={true} onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
         );
    }
}
 
export default SignIn;