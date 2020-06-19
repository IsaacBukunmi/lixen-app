import React from 'react';

import './cataloguepage.styles.css'

const CataloguePage = () => {
    return(
        <div className="catalogue-page">
            <div className="catalogue-title">
                <div className="title-search-form">
                    <h1>Audio Catalogue</h1>
                    <form action="">
                        <input type="search"/>
                    </form>
                </div>
                <p>Check out the collection of our audio catalogue, Relax, get a headset and experience maximum satisfaction</p>
            </div>
            <div className="catalogue-section">
                <h2>POEMS</h2>
                <div className="catalogue-item-container">
                    <div className="catalogue-item">
                        <div className="catalogue-item-image">
                            <img src="" alt=""/>
                        </div>
                        <div className="catalogue-item-details">
                            <p><span>Title:</span></p>
                            <p><span>Author:</span></p>
                            <p><span>Ratings:</span></p>
                            <div className="item-icons">
                                <p><img src="" alt=""/>50</p>
                                <p><img src="" alt=""/>120</p>
                                <p><img src="" alt=""/>1.3k</p>
                            </div>
                        </div>
                    </div>
                    <div className="catalogue-item">
                        <div className="catalogue-item-image">
                            <img src="" alt=""/>
                        </div>
                        <div className="catalogue-item-details">
                            <p><span>Title:</span></p>
                            <p><span>Author:</span></p>
                            <p><span>Ratings:</span></p>
                            <div className="item-icons">
                                <p><img src="" alt=""/>50</p>
                                <p><img src="" alt=""/>120</p>
                                <p><img src="" alt=""/>1.3k</p>
                            </div>
                        </div>
                    </div>
                    <div className="catalogue-item">
                        <div className="catalogue-item-image">
                            <img src="" alt=""/>
                        </div>
                        <div className="catalogue-item-details">
                            <p><span>Title:</span></p>
                            <p><span>Author:</span></p>
                            <p><span>Ratings:</span></p>
                            <div className="item-icons">
                                <p><img src="" alt=""/>50</p>
                                <p><img src="" alt=""/>120</p>
                                <p><img src="" alt=""/>1.3k</p>
                            </div>
                        </div>
                    </div>
                    <div className="catalogue-item">
                        <div className="catalogue-item-image">
                            <img src="" alt=""/>
                        </div>
                        <div className="catalogue-item-details">
                            <p><span>Title:</span></p>
                            <p><span>Author:</span></p>
                            <p><span>Ratings:</span></p>
                            <div className="item-icons">
                                <p><img src="" alt=""/>50</p>
                                <p><img src="" alt=""/>120</p>
                                <p><img src="" alt=""/>1.3k</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CataloguePage;