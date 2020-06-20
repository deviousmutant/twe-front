import React from 'react'
import Item from './sidebar-item'
import Button from '../form/Button'
import Cookies from 'js-cookie'

function Sidebar(props) {

    function redirect(event) {
        props.handleChangeFunc(event)
    }
    function handleClick() {
        Cookies.remove("name")
        Cookies.remove("auth")
        Cookies.remove("valid")
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
                    <Item
                        name="Previous Editions"
                        redirect={redirect}
                    />
                    <Item
                        name="Team members"
                        redirect={redirect}
                    />
                </ul>
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Editorial</span>
                </h6>
                <ul className="nav flex-column mb-2">
                    <Item
                        name="New Article"
                        redirect={redirect}
                    />
                    <Item
                        name="Articles"
                        redirect={redirect}
                    />
                </ul>
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Humans Of VIT</span>
                </h6>
                <ul className="nav flex-column mb-2">
                    <Item
                        name="Addition"
                        redirect={redirect}
                    />
                    <Item
                        name="Previous Interviews"
                        redirect={redirect}
                    />
                </ul>
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Contributions</span>
                </h6>
                <ul className="nav flex-column mb-2">
                    <Item
                        name="Your contribution"
                        redirect={redirect}
                    />
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
                <p className="sidebar-footer"> &copy; 2020 THEPC</p>
            </div>

        </nav>
    )
}

export default Sidebar
