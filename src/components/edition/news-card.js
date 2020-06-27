import React from 'react'

function NewsCard(props) {
    return (
        <div class="card bg-primary" style={{ width: "18rem" }}>
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
                <h1 class="card-title">{props.name}</h1>
            </div>
        </div>
    )

}

export default NewsCard