import React from 'react'
import Input from '../form/Input'
import Button from '../form/Button'
import axios from 'axios'
import qs from 'qs'
import Cookie from 'js-cookie'
import FormData from 'form-data'

function SubmitForm() {
    var final = new FormData();

    var finalArticle = {
        atype: "",
        atitle: "",
        acontent: ""
    }
    const [title, setTitle] = React.useState();
    const [content, setContent] = React.useState();
    const [type, setType] = React.useState();
    const [article, setArticle] = React.useState(false);
    const [picture, setPicture] = React.useState()
    const [success, setSuccess] = React.useState();

    function handleChange(event) {
        const title = event.target.name
        const value = event.target.value
        title === "title" ? setTitle(value) : title === "articleType" ? setType(value) : setContent(value)
    }

    function HandleUpload(event) {
        const value = event.target.files[0]
        setPicture(value)
    }

    finalArticle.atitle = title
    finalArticle.atype = type
    finalArticle.acontent = content
    final.append('atitle', finalArticle.atitle)
    final.append('atype', finalArticle.atype)
    final.append('acontent', finalArticle.acontent)

    function handleClick() {
        setSuccess(101)
        setArticle(true)
        console.log(picture.name);
    }

    function funcSetSuccess(status) {
        if (status === 400) {
            setArticle(false)
        }
        setSuccess(status);
    }

    React.useEffect(() => {
        if (article === true && (picture !== undefined || picture !== null)) {
            final.append('picture', picture, picture.name)
            axios.post('https://thepc.herokuapp.com/api/articles', final, {
                headers: {
                    'Content-Type': `multipart/form-data; boundary=${final._boundary}`,
                    'Authorization': 'Bearer ' + Cookie.get("auth"),
                }
            })
                .then(response => {
                    funcSetSuccess(response.status);
                })
                .catch(error => {
                    // funcSetSuccess(error.response.status);
                });
        }

    }, [article])

    return (
        <div>
            <div className="form-group">
                <Input type="input" name="title" placeholder="Article title" onChange={handleChange} className="dash-input" />
            </div>
            <div className="form-group">
                <select className="form-control" onChange={handleChange} name="articleType">
                    <option>--- Select Type of Article ---</option>
                    <option value="news">News Article</option>
                    <option value="movie">Entertainment Review</option>
                    <option value="editorial">Editorial</option>
                    <option value="satire">Satire</option>
                    <option value="facts">Facts</option>
                </select>
            </div>
            <div className="form-group">
                <Input type="text-area" name="content" placeholder="Article Content" rows="10" onChange={handleChange} className="dash-input" />
            </div>
            <div className="form-group">
                <input type="file" id="myfile" name="myfile" onChange={HandleUpload} className="dash-input"></input>
            </div>
            <Button classAdd={"btn-solid dash-input"} name={"Submit"} handleClick={handleClick} />
            {success === 201 || success === 200 ?
                <div className="alert alert-success alert-dismissible mt-2" role="alert">
                    Article Successfully Submitted
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                :
                success === 400 ?
                    <div className="alert alert-danger alert-dismissible mt-2" role="alert">
                        <span>&#9888;</span> Please check your fields and try again!
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    :
                    success === 101 ?
                        <div className="alert alert-warning alert-dismissible mt-2" role="alert">
                            Please wait...
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        :
                        success === 401 ?
                            <div className="alert alert-warning alert-dismissible mt-2" role="alert">
                                Please authenticate
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            :
                            success === 500 ?
                                <div className="alert alert-danger alert-dismissible mt-2" role="alert">
                                    File size must be less than 5MB
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                : success === 503 &&
                                <div className="alert alert-danger alert-dismissible mt-2" role="alert">
                                    Error: {success} Server Unavailable. Try again after some time.
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
            }

        </div>
    )
}

export default SubmitForm;