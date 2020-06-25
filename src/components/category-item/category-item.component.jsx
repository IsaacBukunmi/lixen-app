import React from 'react';
import { withRouter } from 'react-router-dom'

import './category-item.styles.css';

const CategoryItem = ({title, subTitle, imageUrl, overlay, history, match, linkUrl}) => {
    return(
        <div className="category-item" onClick={()=> history.push(`${match.url}${linkUrl}`)}>
            <img src={imageUrl} alt="" className="category-image"/>
            <div className={`category-title ${overlay}`}>
                <h2>{title.toUpperCase()}</h2>
                <p>{subTitle}</p>
            </div>
        </div>
    )
}

export default withRouter(CategoryItem);