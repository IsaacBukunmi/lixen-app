import React from 'react';

import './category-item.styles.css';

const CategoryItem = ({title, subTitle, imageUrl, overlay}) => {
    return(
        <div className="category-item">
            <img src={imageUrl} alt="" className="category-image"/>
            <div className={`category-title ${overlay}`}>
                <h2>{title.toUpperCase()}</h2>
                <p>{subTitle}</p>
            </div>
        </div>
    )
}

export default CategoryItem;