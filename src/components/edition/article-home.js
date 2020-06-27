import React from 'react'
import ArticleView from './article-view'
import ArticleCard from './article-card'

function ArticleHome() {
    return (
        <div class="row mt-5 ml-2">
            <ArticleView />
            <div class="col-md-4">
                <ArticleCard />
            </div>
        </div>
    )
}

export default ArticleHome