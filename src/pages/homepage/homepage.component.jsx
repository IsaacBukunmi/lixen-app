import React from 'react';

import './homepage.styles.css';

import Category from '../../components/category/category.component';
import Showcase from '../../components/showcase/showcase.component';


const Homepage = () => {
    return (
        <div className="homepage">
           <Showcase />
            <div className="categories-section">
                <h1>Categories</h1>
                <Category />
            </div>
        </div>
    )
}

export default Homepage;