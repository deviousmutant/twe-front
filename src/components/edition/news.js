import React from 'react'
import NewsCard from './news-card'

function News(props) {
    const dataArr=props.content;
    function createCard(mapItem)
    {   if(mapItem.atype=="news")
       return <NewsCard name={mapItem.atitle} />
    } 
    return (
        <div class="swiper-container">
            <div class="swiper-wrapper">
            
                <div class="swiper-pagination">
                {dataArr.map(createCard)}
                </div>
            </div>
        </div>
    )
    
}

export default News