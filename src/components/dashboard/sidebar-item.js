import React from 'react'


var dropDown= document.getElementsByClassName("navbar-toggler");

function Item(props) {
    function handleClick() {
        dropDown[0].click();
        props.redirect(props.name);
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
