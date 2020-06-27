import React from 'react'
import Hero from './hero'
import News from './news'
import ArticleHome from './article-home'

function FinalEdition(props) {
    return (
        <div>
            <Hero />
            <News content={props.content} />
            <ArticleHome data={props.content}/>
            
function FinalEdition() {
    return (
        <div>
            <Hero />
            <News />
            <ArticleHome />
        </div>
    )
}

export default FinalEdition