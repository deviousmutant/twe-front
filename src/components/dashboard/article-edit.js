import React from "react"
import qs from "qs"
import Cookies from "js-cookie"
import Input from "../form/Input"
import Button from "../form/Button"
import axios from "axios"

function ArticleModal(props) {
    const finalArticle = {
        atype: props.type,
        atitle: props.title,
        acontent: props.content
    }
    const [title, setTitle] = React.useState(props.title);
    const [content, setContent] = React.useState(props.content);
    const [type, setType] = React.useState(props.type);
    const [article, setArticle] = React.useState(false);
    const [success, setSuccess] = React.useState();

    function HandleChange(event) {
        const title = event.target.name
        const value = event.target.value
        title === "title" ? setTitle(value) : title === "articleType" ? setType(value) : setContent(value)

    }

    finalArticle.atitle = title
    finalArticle.atype = type
    finalArticle.acontent = content
    function HandleClick() {
        setSuccess(101)
        setArticle(true)
    }

    function funcSetSuccess(status) {
        if (status === 400) {
            setArticle(false)
        }
        setSuccess(status);
    }
    React.useEffect(() => {
        if (article === true) {
            let id = props.id
            console.log(id);

            axios.patch('https://thepc.herokuapp.com/api/articles/' + id, qs.stringify(finalArticle), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Bearer ' + Cookies.get("auth")
                }
            })
                .then(response => {
                    funcSetSuccess(response.status);

                })
                .catch(error => {
                    funcSetSuccess(error.response.status);
                });
        }

    }, [article])
    return (
        <div>
            <div className="modal fade" id="articleEditModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered " role="document">
                    <div className="modal-content bg-black text-white">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Edit Article</h5>
                            {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true" className="btn-light">&times;</span>
                                        </button> */}
                        </div>
                        <div className="modal-body">
                            <br />
                            <br />
                            <div className="form-group">
                                <Input type="input" name="title" placeholder="Article title" onChange={HandleChange} className="dash-input" value={finalArticle.atitle} />
                            </div>
                            <div className="form-group">
                                <select className="form-control" onChange={HandleChange} name="articleType" value={finalArticle.atype}>
                                    <option>--- Select Type of Article ---</option>
                                    <option value="news">News Article</option>
                                    <option value="movie">Movie Review</option>
                                    <option value="editorial">Editorial</option>
                                    <option value="satire">Satire</option>
                                    <option value="facts">Facts</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <Input type="text-area" name="content" placeholder="Article Content" rows="10" onChange={HandleChange} className="dash-input" value={finalArticle.acontent} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <Button classAdd={"btn-solid dash-input"} name={"Submit"} handleClick={HandleClick} />
                            {success === 200 || success === 201 ?
                                <div className="alert alert-success alert-dismissible mt-2 dash-input" role="alert">
                                    Article Successfully Edited
                                    <br />
                                    <small>Click X to close</small>
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true" data-dismiss="modal" aria-label="Close">&times;</span>
                                    </button>
                                </div>
                                :
                                success === 400 ?
                                    <div className="alert alert-danger alert-dismissible mt-2 dash-input" role="alert">
                                        Please check your fields and try again!
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    :
                                    success === 101 &&
                                    <div className="alert alert-warning alert-dismissible mt-2 dash-input" role="alert">
                                        Please wait...
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleModal