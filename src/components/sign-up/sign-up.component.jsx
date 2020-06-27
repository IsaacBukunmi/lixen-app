import React from 'react';
import { auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import { Link } from 'react-router-dom';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import AlternateSignIn from '../alternate-sign-in/alternate-sign-in.component';

import './sign-up.styles.css';

class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }


    handleSubmit = async (event) => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert("passwords don't match")
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            await createUserProfileDocument(user, {displayName})

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch(error){
            console.error(error);
        }
    };

    handleChange = (event) => {
        const {name, value } = event.target;
        this.setState({
            [name]:value
        })
    }

    render(){
        return (
            <div className="sign-up-container">
               <div className="sign-up-title">
                   <h1>SIGN UP</h1>
                   <p>Sign up to get maximum experience from lixen app</p>
                   <p class="register-here">Already have an account? <span><Link to='/signin'>Login here</Link></span></p>
               </div>
               <div className="sign-up-form-container">
                   <p className="form-title">Enter your details below to sign up</p>
                   <form action="" handleSubmit={this.handleSubmit}>
                        <FormInput
                            type="text"
                            name="displayName"
                            placeholder="Enter your display name"
                            handleChange={this.handleChange}
                            value={this.state.displayName}
                            label="Display Name"
                            required
                        />

                        <FormInput
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            handleChange={this.handleChange}
                            value={this.state.email}
                            label="Email"
                            required
                        />
                       <FormInput 
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            handleChange={this.handleChange}
                            value={this.state.password}
                            label="Password"
                            required
                        />
                        <FormInput 
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm your password"
                            handleChange={this.handleChange}
                            value={this.state.confirmPassword}
                            label="Confirm Password"
                            required
                        />
                        <CustomButton type="submit">Sign Up</CustomButton>
                        <AlternateSignIn />
                   </form>
               </div>
            </div>
        )
    }
}

export default SignUp;