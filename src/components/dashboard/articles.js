import React from 'react'
import Card from './card'
import content from './content'

function Articles(p) {

    
    function createCard(articleItem){
        return <Card title={articleItem.name } content={articleItem.article } />
    }


    return(

    <div>
        

        <div class="card-columns row card-align-top row-changes" style= {{itemAlign: "top"}}>
            {content.map(createCard)};
            
            
        </div>
    </div>


    )
}

export default Articles;