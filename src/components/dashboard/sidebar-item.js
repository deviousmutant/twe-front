import React from 'react'


var dropDown= document.getElementsByClassName("navbar-toggler");

function Item(props) {
    function handleClick() {
        var x = window.matchMedia("(max-width: 700px)")
        if (x.matches) {
        dropDown[0].click();}
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
