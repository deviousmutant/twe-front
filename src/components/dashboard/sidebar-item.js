import React from 'react'

function Item(props) {
    function handleClick() {
        props.redirect(props.name)
    }

    return (
        <li className="nav-item" onClick={handleClick}>
            <a className={"nav-link " + props.addClass} href="#" >
                <span data-feather="home"></span>{props.name}
            </a>
        </li>
    )
}

export default Item
