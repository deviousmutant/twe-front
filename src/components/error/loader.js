import React from 'react'
import './404.css'
import Cookies from 'js-cookie'


function Loader() {
    const name = Cookies.get("name")
    return (
        <div className="loadingContainerOne">
            <h1 className="loadingTitle">Welcome {name}!</h1>
            <div className="loader">
            </div>
        </div>
    )
}

export default Loader;