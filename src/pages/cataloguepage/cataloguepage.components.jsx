import React from 'react';

import './cataloguepage.styles.css';
import CATALOGUE_DATA  from './catalogue.data';
import CatalogueList from '../../components/catalogue-list/catalogue-list.component'



class CataloguePage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            catalogueData : CATALOGUE_DATA
        }
    }

    render(){
        const { catalogueData } = this.state;
        return(
            <div className="catalogue-page">
                <div className="catalogue-title">
                    <div className="title-search-form">
                        <h1>Audio Catalogue</h1>
                        <form action="">
                            <input type="search" placeholder="Search for an audio"/>
                        </form>
                    </div>
                    <p>Check out the collection of our audio catalogue, Relax, get a headset and experience maximum satisfaction :)</p>
                </div>
                <div className="overall-catalogue-section">
                    {
                        catalogueData.map(({id, ...otherCatalogueDataProps}) => (
                            <CatalogueList key={id} {...otherCatalogueDataProps} />
                        ))
                    }
                </div>
            </div>
        )
    }

    /* return(

        <div className="catalogue-page">
            <div className="catalogue-title">
                <div className="title-search-form">
                    <h1>Audio Catalogue</h1>
                    <form action="">
                        <input type="search" placeholder="Search for an audio"/>
                    </form>
                </div>
                <p>Check out the collection of our audio catalogue, Relax, get a headset and experience maximum satisfaction :)</p>
            </div>
            <div className="overall-catalogue-section">
                <div className="poem-catalogue-section">
                    <div className="catalogue-section-title">
                        <h2>FEATURED POEMS</h2>
                        <p><a href="">View all Poems</a></p>
                    </div>
                    <div className="catalogue-item-container">
                        <div className="catalogue-item">
                            <div className="catalogue-item-image">
                                <img src="https://images.unsplash.com/photo-1485395578879-6ba080c9cdba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                            </div>
                            <div className="catalogue-item-details">
                                <p>Title: <span>Sunshine Leads</span> </p>
                                <p>Author: <span>Akindayo Emmanuel</span></p>
                                <p class="ratings">Ratings: <span>
                                    <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} /> 
                                    <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                    <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                    <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                    <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                    </span></p>
                                <div className="item-icons">
                                    <p><FontAwesomeIcon icon={faHeart} style={{color:'#f70909'}} /> 120</p>
                                    <p><FontAwesomeIcon icon={faHeadphones} style={{color:'#ff5700'}} /> 1.3k</p>
                                    <p><FontAwesomeIcon icon={faBookmark} style={{color:'#c1058c'}} /> 50</p>
                                </div>
                            </div>
                        </div>
                        <div className="catalogue-item">
                            <div className="catalogue-item-image">
                                <img src="https://images.unsplash.com/photo-1505455184862-554165e5f6ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                            </div>
                            <div className="catalogue-item-details">
                                <p>Title: <span>Hope</span> </p>
                                <p>Author: <span>George Maxwell</span></p>
                                <p>Ratings: <span>
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} /> 
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                    </span></p>
                                <div className="item-icons">
                                    <p><FontAwesomeIcon icon={faHeart} style={{color:'#f70909'}} /> 90</p>
                                    <p><FontAwesomeIcon icon={faHeadphones} style={{color:'#ff5700'}} /> 4.3k</p>
                                    <p><FontAwesomeIcon icon={faBookmark} style={{color:'#c1058c'}} /> 150</p>
                                </div>
                            </div>
                        </div>
                        <div className="catalogue-item">
                            <div className="catalogue-item-image">
                                <img src="https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                            </div>
                            <div className="catalogue-item-details">
                                <p>Title: <span>Love in the air</span> </p>
                                <p>Author: <span>Ciroma Sandra</span></p>
                                <p>Ratings: <span>
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} /> 
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                    </span></p>    
                                <div className="item-icons">
                                    <p><FontAwesomeIcon icon={faHeart} style={{color:'#f70909'}} /> 30</p>
                                    <p><FontAwesomeIcon icon={faHeadphones} style={{color:'#ff5700'}} /> 500</p>
                                    <p><FontAwesomeIcon icon={faBookmark} style={{color:'#c1058c'}} /> 9</p>
                                </div>
                            </div>
                        </div>
                        <div className="catalogue-item">
                            <div className="catalogue-item-image">
                                <img src="https://images.unsplash.com/photo-1476782916354-326ab24c93df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                            </div>
                            <div className="catalogue-item-details">
                                <p>Title: <span>Who are you?</span> </p>
                                <p>Author: <span>Teju Boniface</span></p>
                                <p>Ratings: <span>
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} /> 
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                    </span></p>
                                <div className="item-icons">
                                    <p><FontAwesomeIcon icon={faHeart} style={{color:'#f70909'}} /> 80</p>
                                    <p><FontAwesomeIcon icon={faHeadphones} style={{color:'#ff5700'}} /> 1k</p>
                                    <p><FontAwesomeIcon icon={faBookmark} style={{color:'#c1058c'}} /> 27</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>

                
                <div className="true-stories-catalogue-section">
                    <div className="catalogue-section-title">
                        <h2>FEATURED TRUE STORIES</h2>
                        <p><a href="">View all True Stories</a></p>
                    </div>
                    <div className="catalogue-item-container">
                        <div className="catalogue-item">
                            <div className="catalogue-item-image">
                                <img src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                            </div>
                            <div className="catalogue-item-details">
                                <p>Title: <span>My Life in the city</span> </p>
                                <p>Author: <span>Korede Matt</span></p>
                                <p class="ratings">Ratings: <span>
                                    <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} /> 
                                    <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                    <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                    <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                    <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                    </span></p>
                                <div className="item-icons">
                                    <p><FontAwesomeIcon icon={faHeart} style={{color:'#f70909'}} /> 3k</p>
                                    <p><FontAwesomeIcon icon={faHeadphones} style={{color:'#ff5700'}} /> 30.3k</p>
                                    <p><FontAwesomeIcon icon={faBookmark} style={{color:'#c1058c'}} /> 950</p>
                                </div>
                            </div>
                        </div>
                        <div className="catalogue-item">
                            <div className="catalogue-item-image">
                                <img src="https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                            </div>
                            <div className="catalogue-item-details">
                                <p>Title: <span>Finding the love of my life in the desert</span> </p>
                                <p>Author: <span>Mary James</span></p>
                                <p>Ratings: <span>
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} /> 
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                    </span></p>
                                <div className="item-icons">
                                    <p><FontAwesomeIcon icon={faHeart} style={{color:'#f70909'}} /> 190</p>
                                    <p><FontAwesomeIcon icon={faHeadphones} style={{color:'#ff5700'}} /> 9.3k</p>
                                    <p><FontAwesomeIcon icon={faBookmark} style={{color:'#c1058c'}} /> 150</p>
                                </div>
                            </div>
                        </div>
                        <div className="catalogue-item">
                            <div className="catalogue-item-image">
                                <img src="https://images.unsplash.com/12/barley.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                            </div>
                            <div className="catalogue-item-details">
                                <p>Title: <span>Running with the wind</span> </p>
                                <p>Author: <span>Feyisayo Chukwu</span></p>
                                <p>Ratings: <span>
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} /> 
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                    </span></p>    
                                <div className="item-icons">
                                    <p><FontAwesomeIcon icon={faHeart} style={{color:'#f70909'}} /> 30</p>
                                    <p><FontAwesomeIcon icon={faHeadphones} style={{color:'#ff5700'}} /> 500</p>
                                    <p><FontAwesomeIcon icon={faBookmark} style={{color:'#c1058c'}} /> 9</p>
                                </div>
                            </div>
                        </div>
                        <div className="catalogue-item">
                            <div className="catalogue-item-image">
                                <img src="https://images.unsplash.com/photo-1523975864490-174dd4d9a41e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                            </div>
                            <div className="catalogue-item-details">
                                <p>Title: <span>The Journey of faith</span> </p>
                                <p>Author: <span>Nathan Bakare</span></p>
                                <p>Ratings: <span>
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} /> 
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                    </span></p>
                                <div className="item-icons">
                                    <p><FontAwesomeIcon icon={faHeart} style={{color:'#f70909'}} /> 80</p>
                                    <p><FontAwesomeIcon icon={faHeadphones} style={{color:'#ff5700'}} /> 1k</p>
                                    <p><FontAwesomeIcon icon={faBookmark} style={{color:'#c1058c'}} /> 27</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>

               
                <div className="audio-books-catalogue-section">
                    <div className="catalogue-section-title">
                        <h2>FEATURED AUDIO BOOKS</h2>
                        <p><a href="">View all Audio Books</a></p>
                    </div>
                    <div className="catalogue-item-container">
                        <div className="catalogue-item">
                            <div className="catalogue-item-image">
                                <img src="https://images.unsplash.com/photo-1485395578879-6ba080c9cdba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                            </div>
                            <div className="catalogue-item-details">
                                <p>Title: <span>Sunshine Leads</span> </p>
                                <p>Author: <span>Akindayo Emmanuel</span></p>
                                <p class="ratings">Ratings: <span>
                                    <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} /> 
                                    <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                    <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                    <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                    <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                    </span></p>
                                <div className="item-icons">
                                    <p><FontAwesomeIcon icon={faHeart} style={{color:'#f70909'}} /> 120</p>
                                    <p><FontAwesomeIcon icon={faHeadphones} style={{color:'#ff5700'}} /> 1.3k</p>
                                    <p><FontAwesomeIcon icon={faBookmark} style={{color:'#c1058c'}} /> 50</p>
                                </div>
                            </div>
                        </div>
                        <div className="catalogue-item">
                            <div className="catalogue-item-image">
                                <img src="https://images.unsplash.com/photo-1505455184862-554165e5f6ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                            </div>
                            <div className="catalogue-item-details">
                                <p>Title: <span>Hope</span> </p>
                                <p>Author: <span>George Maxwell</span></p>
                                <p>Ratings: <span>
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} /> 
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                    </span></p>
                                <div className="item-icons">
                                    <p><FontAwesomeIcon icon={faHeart} style={{color:'#f70909'}} /> 90</p>
                                    <p><FontAwesomeIcon icon={faHeadphones} style={{color:'#ff5700'}} /> 4.3k</p>
                                    <p><FontAwesomeIcon icon={faBookmark} style={{color:'#c1058c'}} /> 150</p>
                                </div>
                            </div>
                        </div>
                        <div className="catalogue-item">
                            <div className="catalogue-item-image">
                                <img src="https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                            </div>
                            <div className="catalogue-item-details">
                                <p>Title: <span>Love in the air</span> </p>
                                <p>Author: <span>Ciroma Sandra</span></p>
                                <p>Ratings: <span>
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} /> 
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                    </span></p>    
                                <div className="item-icons">
                                    <p><FontAwesomeIcon icon={faHeart} style={{color:'#f70909'}} /> 30</p>
                                    <p><FontAwesomeIcon icon={faHeadphones} style={{color:'#ff5700'}} /> 500</p>
                                    <p><FontAwesomeIcon icon={faBookmark} style={{color:'#c1058c'}} /> 9</p>
                                </div>
                            </div>
                        </div>
                        <div className="catalogue-item">
                            <div className="catalogue-item-image">
                                <img src="https://images.unsplash.com/photo-1476782916354-326ab24c93df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                            </div>
                            <div className="catalogue-item-details">
                                <p>Title: <span>Who are you?</span> </p>
                                <p>Author: <span>Teju Boniface</span></p>
                                <p>Ratings: <span>
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} /> 
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                    </span></p>
                                <div className="item-icons">
                                    <p><FontAwesomeIcon icon={faHeart} style={{color:'#f70909'}} /> 80</p>
                                    <p><FontAwesomeIcon icon={faHeadphones} style={{color:'#ff5700'}} /> 1k</p>
                                    <p><FontAwesomeIcon icon={faBookmark} style={{color:'#c1058c'}} /> 27</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                

                
                <div className="bedtime-stories-catalogue-section">
                    <div className="catalogue-section-title">
                        <h2>FEATURED BEDTIME STORIES</h2>
                        <p><a href="">View all Bedtime Stories</a></p>
                    </div>
                    <div className="catalogue-item-container">
                        <div className="catalogue-item">
                            <div className="catalogue-item-image">
                                <img src="https://images.unsplash.com/photo-1485395578879-6ba080c9cdba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                            </div>
                            <div className="catalogue-item-details">
                                <p>Title: <span>Sunshine Leads</span> </p>
                                <p>Author: <span>Akindayo Emmanuel</span></p>
                                <p class="ratings">Ratings: <span>
                                    <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} /> 
                                    <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                    <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                    <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                    <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                    </span></p>
                                <div className="item-icons">
                                    <p><FontAwesomeIcon icon={faHeart} style={{color:'#f70909'}} /> 120</p>
                                    <p><FontAwesomeIcon icon={faHeadphones} style={{color:'#ff5700'}} /> 1.3k</p>
                                    <p><FontAwesomeIcon icon={faBookmark} style={{color:'#c1058c'}} /> 50</p>
                                </div>
                            </div>
                        </div>
                        <div className="catalogue-item">
                            <div className="catalogue-item-image">
                                <img src="https://images.unsplash.com/photo-1505455184862-554165e5f6ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                            </div>
                            <div className="catalogue-item-details">
                                <p>Title: <span>Hope</span> </p>
                                <p>Author: <span>George Maxwell</span></p>
                                <p>Ratings: <span>
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} /> 
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                    </span></p>
                                <div className="item-icons">
                                    <p><FontAwesomeIcon icon={faHeart} style={{color:'#f70909'}} /> 90</p>
                                    <p><FontAwesomeIcon icon={faHeadphones} style={{color:'#ff5700'}} /> 4.3k</p>
                                    <p><FontAwesomeIcon icon={faBookmark} style={{color:'#c1058c'}} /> 150</p>
                                </div>
                            </div>
                        </div>
                        <div className="catalogue-item">
                            <div className="catalogue-item-image">
                                <img src="https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                            </div>
                            <div className="catalogue-item-details">
                                <p>Title: <span>Love in the air</span> </p>
                                <p>Author: <span>Ciroma Sandra</span></p>
                                <p>Ratings: <span>
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} /> 
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                    </span></p>    
                                <div className="item-icons">
                                    <p><FontAwesomeIcon icon={faHeart} style={{color:'#f70909'}} /> 30</p>
                                    <p><FontAwesomeIcon icon={faHeadphones} style={{color:'#ff5700'}} /> 500</p>
                                    <p><FontAwesomeIcon icon={faBookmark} style={{color:'#c1058c'}} /> 9</p>
                                </div>
                            </div>
                        </div>
                        <div className="catalogue-item">
                            <div className="catalogue-item-image">
                                <img src="https://images.unsplash.com/photo-1476782916354-326ab24c93df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
                            </div>
                            <div className="catalogue-item-details">
                                <p>Title: <span>Who are you?</span> </p>
                                <p>Author: <span>Teju Boniface</span></p>
                                <p>Ratings: <span>
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} /> 
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                        <FontAwesomeIcon icon={faStar} style={{color:'#FFDF00'}} />
                                    </span></p>
                                <div className="item-icons">
                                    <p><FontAwesomeIcon icon={faHeart} style={{color:'#f70909'}} /> 80</p>
                                    <p><FontAwesomeIcon icon={faHeadphones} style={{color:'#ff5700'}} /> 1k</p>
                                    <p><FontAwesomeIcon icon={faBookmark} style={{color:'#c1058c'}} /> 27</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>

            </div>
        </div>
    )
    */
}

export default CataloguePage;