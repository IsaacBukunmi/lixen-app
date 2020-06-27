import React from 'react';
import { Link } from 'react-router-dom';


import './sign-in.styles.css';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'
import AlternateSignIn from '../alternate-sign-in/alternate-sign-in.component';


class SignIn extends React.Component{
    constructor(){
        super();
        this.state = {
           email: '',
           password: '' 
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }


    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState ({
            [name]:value
        })
    }

    render(){
        return(
            <div className="sign-in-container">
               <div className="sign-in-title">
                   <h1>SIGN IN</h1>
                   <p>Sign into your account to access your profile</p>
                   <p class="register-here">Don't have an account? <span><Link to='/signup'>Register here</Link></span></p>
               </div>
               <div className="sign-in-form-container">
                   <p className="form-title">Enter your email and password to sign in</p>
                   <form action="">
                        <FormInput
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            handleChange={this.handleChange}
                            value={this.state.email}
                            label="email"
                            required
                        />
                       <FormInput 
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            handleChange={this.handleChange}
                            value={this.state.password}
                            label="password"
                            reequired
                        />
                        <CustomButton>Sign In</CustomButton>
                        <AlternateSignIn />
                   </form>
               </div>
            </div>
        )
    }
}



export default SignIn;