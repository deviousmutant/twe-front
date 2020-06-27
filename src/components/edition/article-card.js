import React from 'react'

function ArticleCard() {
    return (
        <div class="card mb-3" style={{ maxWidth: "500px" }}>
            <div class="row no-gutters">
                <div class="col-md-4">
                    <img src="..." class="card-img" alt="..." />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Title of the article</p>
                        <p class="card-text"><small class="text-muted">Author Name</small></p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard;