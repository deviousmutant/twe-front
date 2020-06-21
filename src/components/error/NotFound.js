import React from 'react'
import './404.css'

function NotFound() {
    document.title = "404"
    return (
        <div>
            <h1 class="question">?</h1>
            <h1>404: Not Found</h1>
            <h3>The route you are looking for is invalid. <a href="/">Back to home</a></h3>
            <center><img class="image" src="img/notFound.svg" alt="" /></center>
        </div>
    )
}

export default NotFound