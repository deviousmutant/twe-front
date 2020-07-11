import React from 'react'
import Item from './sidebar-item'
import Cookies from 'js-cookie'

function Sidebar(props) {
    function redirect(event) {
        props.handleChangeFunc(event)
    }
    function handleClick(reponse) {
        Cookies.remove("name")
        Cookies.remove("auth")
        props.signout()
    }
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="sidebar-sticky pt-3">
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>General</span>
                </h6>
                <ul className="nav flex-column">
                    <Item
                        name="Dashboard"
                        redirect={redirect}
                    />
                    {props.valid === "admin" && <Item name="New Edition" redirect={redirect} />}
                </ul>
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Articles</span>
                </h6>
                <ul className="nav flex-column mb-2">
                    <Item
                        name="New Article"
                        redirect={redirect}
                    />
                    <Item
                        name="Your Articles"
                        redirect={redirect}
                    />
                    <Item
                        name="All Articles"
                        redirect={redirect}
                    />
                </ul>
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Humans Of VIT (Admin only)</span>
                </h6>
                <ul className="nav flex-column mb-2">
                    {props.valid === "admin" && <Item name="Addition" redirect={redirect} />}

                </ul>
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Contributions</span>
                </h6>
                <ul className="nav flex-column mb-2">

                    <Item
                        name="Others contribution"
                        redirect={redirect}
                    />
                </ul>
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Additional Options</span>
                </h6>
                <ul className="nav flex-column mb-2">
                    <Item
                        name="Sign Out"
                        redirect={handleClick}
                    />
                </ul>
                <p className="sidebar-footer">v1.2</p>
            </div>

        </nav>
    )
}

export default Sidebar
