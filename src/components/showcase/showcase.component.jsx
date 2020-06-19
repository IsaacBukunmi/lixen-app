import React from 'react';
import { ReactComponent as Logo} from '../../assets/headphone-icon-2.svg';

import './showcase.styles.css';


const Showcase = () => {
    return (
       
        <div className="homepage-showcase">
            <div className="showcase-title">
                <div className="showcase-title-logo">
                    <h1 className="homepage-title">Lixen</h1>
                    <Logo className="main-logo" />
                </div>
                <p>...We can hear your tender voice speaking to our soul</p>
            </div>
            <div className="button-links">
                <button className="get-started">Get Started</button>
                <button className="know-more">Learn More</button>
            </div>
        </div>  
    )
}

export default Showcase;