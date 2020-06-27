import React from 'react'

function NewsCard(props) {
    return (
        <div class="swiper-slide">
            <div class="swiper-img">
                <img class="card-img" src="style/cardimg.jpg" />
            </div>
            <div class="swiper-details">
                <h3> {props.name}</h3>
            </div>
        </div>
    )
    
}

export default NewsCard