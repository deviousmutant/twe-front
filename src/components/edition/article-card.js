import React from 'react'   


function ArticleCard(props) {
    
       


    return (
        <div class="card mb-3 card-shadow-radius" >
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="..." class="card-img" alt="..." />
                </div>
                <div class="col-md-8">
               
                    <div class="card-body" style={{height:"auto"}}>
                        <h5 class="card-title">{props.name}</h5>
                        <p class="card-text"><small class="text-muted">{props.author}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard;