import React, { useState, useEffect } from 'react'
import Card from './article-card'
import axios from 'axios'
import Cookies from 'js-cookie'
import Input from '../form/Input'

function AllArticles(props) {
    const [dataArr, setDataArr] = useState([]);
    const [loading, setLoading] = useState(true)
    const [edNum, setEdNum] = useState(Cookies.get("enumber"))

    function HandleOutput(data) {
        setLoading(false)
        setDataArr(data);

    }
    React.useEffect(() => {
        axios.get('https://thepc.herokuapp.com/api/admin/allarticles', {
            headers: {
                'Authorization': 'Bearer ' + Cookies.get("auth")
            }
        })
            .then(response => {
                HandleOutput(response.data);
            })
            .catch(error => {
                console.log(error)
            })
    }, [])
    function HandleChange(event) {
        const value = event.target.value
        setEdNum(value)

    }
    function HandleClick() {
        Cookies.set("enumber", edNum)
    }
    function createCard(articleItem) {
        return <Card title={articleItem.atitle} content={articleItem.acontent} articleID={articleItem._id} author={articleItem.authorName} type={articleItem.atype}
            valid={props.valid} approvalStatus={articleItem.approved}
            ednum={articleItem.editionNumber}
        />
    }
    return (
        <div>
            {Cookies.get("enumber") && props.valid === "admin" ? <div className="alert alert-success alert-dismissible mt-2" role="alert">
                You are approving for <strong>Edition {edNum} </strong>
                {loading === false &&
                    <img src="/icons/pencil.svg" className="icon text-success" alt="" width="14" height="14" title="Approval" data-toggle="modal" data-target="#exampleModalCenter" name="Approve" />
                }
            </div>
                :
                props.valid === "admin" &&
                <div className="alert alert-danger alert-dismissible mt-2" role="alert">
                    Create an edition to approve articles
                </div>}
            {loading === true ?
                <div className="alert alert-warning alert-dismissible mt-2" role="alert">
                    Please wait...
                </div>
                :
                dataArr.length > 0 ?
                    <div>
                        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered " role="document">
                                <div className="modal-content bg-black text-white">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLongTitle">Change Selected Edition</h5>
                                        {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true" className="btn-light">&times;</span>
                                        </button> */}
                                    </div>
                                    <div className="modal-body">
                                        Please ensure you have created the edition you wish to switch to.<br />
                                        <br />
                                        <Input type="input" placeholder="Edition Number" onChange={HandleChange} className="dash-input" />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-solid dash-input" onClick={HandleClick} data-dismiss="modal">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-columns" style={{ itemAlign: "top" }}>
                            {dataArr.map(createCard)}
                        </div>
                    </div>
                    :
                    <div className="alert alert-danger alert-dismissible mt-2" role="alert">
                        No Articles found!
                    </div>
            }
        </div>
    )
}

export default AllArticles;