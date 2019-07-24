import React, { Component } from 'react';
import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component'
import { auth, createUserProfileDocument  } from '../../firebase/firebase.utils';

import './SignUp.styles.scss';

class SignUP extends Component {

    state = { 
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("passwords dont match");
            return;
        }


        try{

            const { user } = await auth.createUserWithEmailAndPassword( email, password );


            createUserProfileDocument( user , { displayName });

            this.setState({
                displayName:'',
                email: '',
                password: '',
                confirmPassword:''
            })

        } catch(error) {

            console.error(error);

        }
    }

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    }

    
    render() { 
        const {displayName, email, password, confirmPassword} = this.state;
        return ( 
            <div className="sign-up">
                <h2 className="title">SIGN UP</h2>
                <span>Please, sign up to enter.</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput 
                type="text"
                value={displayName}
                name="displayName"
                label="Name" 
                onChange={this.handleChange}
                required
                />
                <FormInput 
                type="text"
                value={email}
                name="email"
                label="Email" 
                onChange={this.handleChange}
                required
                />
                <FormInput 
                type="password"
                value={password}
                name="password"
                label="Password" 
                onChange={this.handleChange}
                required
                />
                <FormInput 
                type="password"
                value={confirmPassword}
                name="confirmPassword"
                label="Confirm Password" 
                onChange={this.handleChange}
                required
                />
                <CustomButton type="submit">SING UP</CustomButton>
                </form>
            </div>
         );
    }
}
 
export default SignUP;