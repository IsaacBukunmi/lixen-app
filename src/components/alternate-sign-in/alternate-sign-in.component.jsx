import React from 'react';
import { ReactComponent as GoogleLogo } from '../../assets/google-logo.svg';
import { ReactComponent as FacebookLogo } from '../../assets/facebook-icon.svg';

import { signInWithGoogle } from '../../firebase/firebase.utils'

import './alternate-sign-in.styles.css';

const AlternateSignIn = () => {
    return(
        <div className="alternate-sign-in">
            <div className="border-line-container">
                <div className="left-line"></div>
                <p>Or sign in using</p>
                <div className="right-line"></div>
            </div>
            <div className="sigin-icons-container">
                <GoogleLogo  className="google-logo" onClick={signInWithGoogle}/>
                <FacebookLogo  className="facebook-logo"/>
            </div>
        </div>
    )
}

export default AlternateSignIn;