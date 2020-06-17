import React from 'react';
import CategoryItem from '../../components/category-item/category-item.component'

import './category.styles.css';


class Category extends React.Component{
    constructor(){
        super();

        this.state = {
            categorySections : [
                {
                    title:'poems',
                    subTitle:'Listen to the best of poems',
                    imageUrl:'https://images.unsplash.com/photo-1585834447749-a4b9c0dcbc5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80',
                    id:1,
                    overlay:'poems',
                    linkUrl:'poems', 
                },

                {
                    title:'true stories',
                    subTitle:'Listen to various stories based on real life experiences',
                    imageUrl:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                    id:2,
                    overlay:'true-stories',
                    linkUrl:'true-stories',
                },

                {
                    title:'audio books',
                    subTitle:'Relax and Listen to these audio books',
                    imageUrl:'https://images.unsplash.com/photo-1552159120-eedef3af32dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                    id:3,
                    overlay:'audio-books',
                    linkUrl:'audio-books'
                },

                {
                    title:'bedtime stories',
                    subTitle:'Listen to various stories while on your bed',
                    imageUrl:'https://images.unsplash.com/photo-1519791883288-dc8bd696e667?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                    id:4,
                    overlay:'bedtime-stories',
                    linkUrl:'bedtime-stories'
                },

                {
                    title:'fictional stories',
                    subTitle:'Listen to some of the best fictional stories',
                    imageUrl:'https://images.unsplash.com/photo-1530374195309-8c25022c4753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                    id:5,
                    overlay:'fictional-stories',
                    linkUrl:'fictional-stories'
                },

                {
                    title:'songs',
                    subTitle:'Listen to some soul-touching songs',
                    imageUrl:'https://images.unsplash.com/photo-1560999909-e214227dd21b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                    id:6,
                    overlay:'songs',
                    linkUrl:'songs'
                },

                {
                    title:'instrumentals',
                    subTitle:'Listen to amazing instrumentals',
                    imageUrl:'https://images.unsplash.com/photo-1583604518057-6c31e12d4e30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                    id:7,
                    overlay:'instrumentals',
                    linkUrl:'instrumentals'
                },

                {
                    title:'lifestyles',
                    subTitle:'Listen to various opinions on lifestyle',
                    imageUrl:'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80',
                    id:8,
                    overlay:'lifestyles',
                    linkUrl:'lifestyles'
                },

                {
                    title:'motivational',
                    subTitle:'Listen to some of the best motivational speeches',
                    imageUrl:'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"',
                    id:8,
                    overlay:'motivational',
                    linkUrl:'motivational'
                }
                
            ]
        }

    }

    render(){
        const { categorySections } = this.state
        return (
            <div className="category-item-container">
                {
                    categorySections.map(({id, ...otherSectionItemsProps}) => (
                        <CategoryItem key={id} { ...otherSectionItemsProps }  />
                    ))
                }
            </div>
        )
    }
}


export default Category;