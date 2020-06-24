import React from 'react';
import { ReactComponent as GoogleLogo } from '../../assets/google-logo.svg';
import { ReactComponent as FacebookLogo } from '../../assets/facebook-icon.svg'


import './sign-in.styles.css';
import FormInput from '../form-input/form-input.component';


class SignIn extends React.Component{
    constructor(){
        super();

    }

    render(){
        return(
            <div className="sign-in-container">
               <div className="sign-in-title">
                   <h1>SIGN IN</h1>
                   <p>Sign into your account to access your profile</p>
                   <p class="register-here">Don't have an account? <span><a href="">Register here</a></span></p>
               </div>
               <div className="sign-in-form-container">
                   <p className="form-title">Enter your email and password to sign in</p>
                   <form action="">
                        <FormInput 
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                        />
                       <FormInput 
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                        />
                       <div className="sign-in-button">
                           <button>Sign In</button>
                       </div>
                       <div className="border-line-container">
                           <div className="left-line"></div>
                           <p>Or sign in using</p>
                           <div className="right-line"></div>
                       </div>
                       <div className="sigin-icons-container">
                           <GoogleLogo  className="google-logo"/>
                           <FacebookLogo  className="facebook-logo"/>
                       </div>
                   </form>
               </div>
            </div>
        )
    }
}



export default SignIn;