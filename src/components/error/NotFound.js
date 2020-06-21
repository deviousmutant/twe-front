import React from 'react'
import './404.css'

function NotFound() {
    document.title = "404"

    return (
        <div>
            <h1 className="notFoundQuestion">?</h1>
            <h1 className="notFoundTitle">404: Not Found</h1>
            <h3 className="notFoundText">The route you are looking for is invalid. <a href="/">Back to home</a></h3>
            <center><img className="notFoundImage" src="img/notFound.svg" alt="" /></center>
        </div>
    )
}

export default NotFound