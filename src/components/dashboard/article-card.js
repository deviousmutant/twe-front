import React, { useState } from 'react'
import _ from "lodash"
import axios from "axios"
import Cookies from "js-cookie"
import qs from "qs"
import ArticleModal from "./article-edit"

function Card(props) {
    const [cardContent, setCardContent] = useState(props.content.substring(0, 99) + " ...");
    const [readState, setReadState] = useState("Read More");
    const auth = Cookies.get("auth")
    const [statusRemoval, setStatusRemoval] = useState(false)
    const [statusApprove, setStatusApprove] = useState(false)
    const approvalStatus = props.approvalStatus
    const [articleID, setArticleID] = useState("")
    const [approved, setApproved] = useState(false)
    function cardContentToggle() {
        if (readState === "Read More") {
            setCardContent(props.content);
            setReadState("Read Less");
        } else {
            setCardContent(props.content.substring(0, 99) + " ...");
            setReadState("Read More");
        }
    }
    function HandleApprove(name, id) {
        setArticleID(id)
        name === "reject" ? setStatusApprove("reject") : setStatusApprove(true)

    }
    function HandleRemove(name, id) {
        setArticleID(id)
        setStatusRemoval(true)

    }
    React.useEffect(() => {
        if (statusRemoval === true) {
            let url = "https://thepc.herokuapp.com/api/articles/" + articleID
            axios.delete(url, {
                headers: {
                    'Authorization': 'Bearer ' + auth
                }
            }, qs.stringify({})).then((response) => {
                response.status === 200 && setApproved("deleted")
            }).catch(error => {
                console.log(error);

            }).finally(() => {
                setStatusRemoval(false)
            })
        }
    }, [statusRemoval])

    React.useEffect(() => {
        if (statusApprove === true) {
            let url = "https://thepc.herokuapp.com/api/articles/select/edition/" + articleID
            axios.patch(url, qs.stringify({
                approved: "approved",
                edition: Cookies.get("enumber")
            }), {
                headers: {
                    'Authorization': 'Bearer ' + auth
                }
            }).then((response) => {
                response.status === 200 && setApproved("approved")
            }).catch(error => {
                console.log(error);
            }).finally(setStatusApprove(false))
        } else if (statusApprove === "reject") {
            let url = "https://thepc.herokuapp.com/api/articles/select/edition/" + articleID
            axios.patch(url, qs.stringify({
                approved: "rejected",
                edition: Cookies.get("enumber")
            }), {
                headers: {
                    'Authorization': 'Bearer ' + auth
                }
            }).then((response) => {
                response.status === 200 && setApproved("rejected")
            }).catch(error => {
                console.log(error);
            }).finally(setStatusApprove(false))
        }
    }, [statusApprove])
    function handleClick(event) {
        const name = event.target.name
        const title = props.title
        const id = props.articleID;
        setApproved("working")
        if (name === "Approve") {
            setApproved("working")
            HandleApprove(title, id)
        } else if (name === "Reject") {
            if (props.ednum) {
                if (props.ednum == Cookies.get("enumber")) {
                    setApproved("working")
                    HandleApprove("reject", id)
                } else {
                    console.log("Please change your edition to proceed");
                    setApproved("invalid")
                }
            }
            else {
                setApproved("working")
                HandleApprove("reject", id)
            }

        } else if (name === "Delete") {
            setApproved("working")
            HandleRemove(title, id)
        }

    }
    return (
        <div className="card card-article ">
            <img src="img/card_img.jpg" className="card-img-top no-gutters" alt="..." />
            <div className="card-body">
                <span className="badge badge-pill badge-dark mb-2 mr-1">{_.upperCase(props.type)}</span>
                {/* {(approvalStatus === "approved" || approved === true) && (approved !== "deleted" || approved !== "working" || approved !== "rejected") ? <span class="badge badge-pill badge-success mb-2">Approved</span> : approvalStatus === "rejected" || approved === "rejected" ? <span class="badge badge-pill badge-danger mb-2">Rejected</span> : approved === "working" ? <span class="badge badge-pill badge-info mb-2">...</span> : approved === "deleted" ? <span class="badge badge-pill badge-danger mb-2">Deleted</span> : <span class="badge badge-pill badge-warning mb-2">Approval Pending</span>} */}
                {(approvalStatus === "approved" || approved === "approved") && approved !== "rejected" && approved !== "working" && approved !== "deleted" ? <span className="badge badge-pill badge-success mb-2">Approved</span> : approved === "working" ? <span className="badge badge-pill badge-info mb-2">...</span> : approvalStatus === "rejected" || approved === "rejected" ? <span className="badge badge-pill badge-danger mb-2">Rejected</span> : approved === "deleted" ? <span className="badge badge-pill badge-danger mb-2">Deleted</span> : <span className="badge badge-pill badge-warning mb-2">Pending Approval</span>}
                {(props.ednum && approved !== "approved" && approved !== "rejected") ? <span className="badge badge-pill badge-primary mb-2 ml-1">Edition {props.ednum}</span> : approved === "approved" && <span className="badge badge-pill badge-primary mb-2 ml-1">Edition {Cookies.get("enumber")}</span>}

                <h5 className="card-title">{props.title} </h5>
                <small><p className="card-text text-muted mt-0">{props.author}</p></small>
                <p className="card-text">{cardContent + "     "}
                    <span className="read-more text-primary" onClick={cardContentToggle} >{readState}</span>
                </p>

            </div>
            <div className="card-footer card-footer-article">
                {props.valid === "admin" && (approvalStatus === "pending" || approvalStatus === "rejected" || approved === "rejected") && (Cookies.get("enumber")) &&
                    <img src="/icons/check.svg" className="icon" alt="" width="32" height="32" title="Approve" onClick={handleClick} name="Approve" />
                }
                {(approvalStatus === "pending" || approvalStatus === "rejected" || approved === "rejected") && (props.author === Cookies.get("name") || props.currentUser === true) &&
                    <img src="/icons/pencil.svg" className="icon" alt="" width="32" height="32" title="Edit" data-toggle="modal" data-target="#articleEditModal" name="Edit" />
                }
                {props.valid === "admin" && (approvalStatus === "pending" || approvalStatus === "approved" || approved === "approved") &&
                    <img src="/icons/X.svg" className="icon" alt="" width="32" height="32" title="Reject" onClick={handleClick} name="Reject" />
                }
                {(approvalStatus === "pending" || approvalStatus === "rejected" || approved === "rejected") && (props.author === Cookies.get("name") || props.currentUser === true) &&
                    <img src="/icons/Trash.svg" className="icon" alt="" width="25" height="25" title="Delete" onClick={handleClick} name="Delete" />
                }
            </div>
            <div>
                {approved === "invalid" && props.valid === "admin" ? <span className="badge badge badge-danger mb-2 ml-1"> ERROR: Change Edition number!</span>
                    :
                    Cookies.get("enumber") && props.valid === "admin" ?
                        <span className="badge badge badge-success mb-2 ml-1">
                            Selected Edition: {Cookies.get("enumber")}
                        </span>
                        :
                        props.valid === "admin" && <span className="badge badge badge-danger mb-2 ml-1">No Selected edition</span>}
            </div>
            <ArticleModal title={props.title} type={props.type} content={props.content} id={props.articleID} />
        </div>
    )
}
export default Card;