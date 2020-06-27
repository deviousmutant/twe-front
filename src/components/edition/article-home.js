import React from 'react'
import ArticleView from './article-view'
import ArticleCard from './article-card'

function ArticleHome(props) {
    const dataArr=props.data;
    function createCard(mapItem)
    {
       return <ArticleCard name={mapItem.atitle} content={mapItem.acontent} author={mapItem.author}/>
    } 
    return (
        <div class="row mt-5 ml-2">
            <ArticleView />
            <div class="col-md-4">
            {dataArr.map(createCard)}
            </div>
        </div>
    )
}

export default ArticleHome