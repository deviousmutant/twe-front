import React from 'react'
import NewsCard from './news-card'

function News(props) {
    const dataArr = props.content;
    function createCard(mapItem) {
        if (mapItem.atype === "news")
            return <NewsCard name={mapItem.atitle} />
    }
    return (
        <div class="card-columns">
            {dataArr.map(createCard)}
        </div>
    )

}

export default News