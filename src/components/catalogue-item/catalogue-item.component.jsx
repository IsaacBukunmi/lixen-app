import React from 'react';

import './catalogue-item.styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const CatalogueItem = ({title, author, imageUrl, ratings, heart, listened, bookmarked}) => {
    return(
        <div className="catalogue-item">
                <div className="catalogue-item-image">
                    <img src={imageUrl} alt=""/>
                </div>
                <div className="catalogue-item-details">
                    <p class="title">Title: <span>{title}</span> </p>
                    <p class="author">Author: <span>{author}</span></p>
                    <p class="ratings">Ratings: <span>
                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} /> 
                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                        </span></p>
                    <div className="item-icons">
                        <p><FontAwesomeIcon icon={faHeart} style={{color:'#f70909'}} /> {heart}</p>
                        <p><FontAwesomeIcon icon={faHeadphones} style={{color:'#ff5700'}} /> {listened}</p>
                        <p><FontAwesomeIcon icon={faBookmark} style={{color:'#c1058c'}} /> {bookmarked}</p>
                    </div>
                </div>
        </div>
    )
}

export default CatalogueItem;