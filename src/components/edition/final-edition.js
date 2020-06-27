import React from 'react'
import Hero from './hero'
import News from './news'
import ArticleHome from './article-home'


function FinalEdition(props) {
    return (
        <div>
            <Hero enum={props.enum} />
            <News content={props.content} />
            <ArticleHome data={props.content} />
        </div>
    )
}

export default FinalEdition