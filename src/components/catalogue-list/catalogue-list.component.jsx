import React from 'react';
import CatalogueItem from '../catalogue-item/catalogue-item.component';
import { Link } from 'react-router-dom';

import './catalogue-list.styles.css';

const CatalogueList = ({ title, routeName, items, catalogueBackground }) => {
    return(
        <div className={catalogueBackground}>
            <div className="catalogue-section-title">
                <h2>FEATURED {title.toUpperCase()}</h2>
                <p><Link to={`/catalogue/${routeName}`}>View all {title}</Link></p>
            </div>
            <div className="catalogue-item-container">
                {
                    items
                    .filter((item, idx) => idx < 4)
                    .map(({id, ...otherCatalogueItemProps}) => (
                        <CatalogueItem key={id} {...otherCatalogueItemProps} />
                    ))  
                }
            </div>
           
        </div>
    )
}

export default CatalogueList;