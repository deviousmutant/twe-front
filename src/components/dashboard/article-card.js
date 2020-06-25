import React, { useState } from 'react'
function Card(props) {
    var [cardContent, setCardContent] = useState(props.content.substring(0, 99) + "..");
    var [readState, setReadState] = useState("Read More");

    function cardContentToggle() {
        if (readState === "Read More") {
            setCardContent(props.content);
            setReadState("Read Less");
        } else {
            setCardContent(props.content.substring(0, 99) + "..");
            setReadState("Read More");
        }
    }
    return (
        <div className="card card-article">
            <img src="img/card_img.jpg" className="card-img-top no-gutters" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title} </h5>
                <p className="card-text">{cardContent + "     "}
                    <span className="read-more" onClick={cardContentToggle} >{readState}</span>
                </p>
            </div>
            <div className="card-footer card-footer-article">
                <small className="text-muted">
                    <img className="icon first-icon " src="img/check.svg" alt="..." />
                    <img className="icon second-icon" src="img/close.svg" alt="..." />
                    <img className="icon third-icon" src="img/comment (6).svg" alt="..." />
                </small>
            </div>
        </div>
    )
}

export default Card;