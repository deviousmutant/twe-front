import React from 'react'
import NewsCard from './news-card'

function News(props) {
    return (
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <NewsCard />
                <div class="swiper-pagination"></div>
            </div>
        </div>
    )
}

export default News