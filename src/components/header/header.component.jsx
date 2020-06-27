import React from 'react';
import { ReactComponent as Logo} from '../../assets/headphone-icon.svg';
import { withRouter, Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils'

import './header.styles.css';

const Header = ({ currentUser, match }) => {
    return (
        <div className="header">
            <div className="header-logo-container">
                <Link to='/' className="header-logo ">
                    <Logo  className="nav-logo"/>
                </Link>
            </div>
            <div className="nav-items-container">
                {  match.path===`${match.url}/` ?
                    <Link to='/' className="nav-item active">
                        Home
                    </Link> :
                    <Link to='/' className="nav-item">
                        Home
                    </Link>
                }
                {
                  match.path===`${match.url}/catalogue` ? 
                    <Link to='/audio-catalogue' className="nav-item active">
                        Audio Catalogue
                    </Link> :
                    <Link to='/audio-catalogue' className="nav-item">
                        Audio Catalogue
                    </Link> 
                }
               
                <Link className="nav-item">
                    Contact
                </Link>

                {   
                    currentUser ? 
                    <Link  className="nav-item" onClick={() => auth.signOut()}>
                        Sign Out
                    </Link> :
                    <Link to='/signin' className="nav-item">
                        Sign In
                    </Link>
                }
                
            </div>
        </div>
    )
}

export default withRouter(Header);

