import React, { useState } from 'react'


function Card(props) {

    var [cardContent, setCardContent] = useState(props.content.substring(0, 99) + "...");
    var [readState, setReadState] = useState("Read More");
    const [approvalStatus, setApprovalStatus] = useState(props.approvalStatus)
    function cardContentToggle() {
        if (readState === "Read More") {
            setCardContent(props.content);
            setReadState("Read Less");
        } else {
            setCardContent(props.content.substring(0, 99) + "...");
            setReadState("Read More");
        }
    }
    function handleClick(event) {
        const name = event.target.name
        const title = props.title
        const id = props.articleID
        if (name === "Approve") {
            props.HandleApprove(title, id)
            setApprovalStatus(true)
        } else if (name === "Remove") {
            props.HandleRemove(title, id)
            setApprovalStatus("Deleted")
        }
    }
    return (
        <div className="card card-article card-shadow-radius">
            <img src="img/card_img.jpg" className="card-img-top no-gutters" alt="..." />
            <div className="card-body">
                {approvalStatus === true ? <span class="badge badge-pill badge-success mb-2">Approved</span> : approvalStatus === "Deleted" ? <span class="badge badge-pill badge-danger mb-2">Deleted</span> : <span class="badge badge-pill badge-warning mb-2">Approval Pending</span>}
                <h5 className="card-title">{props.title} </h5>
                <p className="card-text">{cardContent + "     "}
                    <span className="read-more text-primary" onClick={cardContentToggle} >{readState}</span>
                </p>
            </div>
            <div className="card-footer card-footer-article">
                <small className="text-muted">
                    {props.valid === "admin" && approvalStatus === false && <img className="icon first-icon" src="img/check.svg" alt="..." onClick={handleClick} name="Approve" />}
                    <img className="icon second-icon" src="img/close.svg" alt="..." onClick={handleClick} name="Remove" />
                    <img className="icon third-icon" src="img/comment (6).svg" alt="..." />
                </small>

            </div>
        </div>
    )
}

export default Card;