import React from 'react';
import CATALOGUE_DATA from '../../cataloguepage/catalogue.data';

import './poems.styles.css';
import CatalogueItem from '../../../components/catalogue-item/catalogue-item.component';


class Poems extends React.Component{
    constructor(){
        super();
        this.state={
            poemsDataItem:CATALOGUE_DATA[0].items
        }
    }

    render(){
        const { poemsDataItem } = this.state;
        return(
            <div >
               <CatalogueItem />
            </div>
        )
    }
} 

export default Poems;