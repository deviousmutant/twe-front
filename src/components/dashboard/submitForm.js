import React from 'react'
import Input from '../form/Input'
import Button from '../form/Button'
import axios from 'axios'
import qs from 'qs'
import Cookie from 'js-cookie'

function SubmitForm() {

    const finalArticle = {
        atype: "",
        atitle: "",
        acontent: ""
    }
    const [title, setTitle] = React.useState();
    const [content, setContent] = React.useState();
    const [type, setType] = React.useState();
    const [article, setArticle] = React.useState(false);
    const [success, setSuccess] = React.useState();

    function handleChange(event) {
        const title = event.target.name
        const value = event.target.value
        title === "title" ? setTitle(value) : title === "articleType" ? setType(value) : setContent(value)

    }

    finalArticle.atitle = title
    finalArticle.atype = type
    finalArticle.acontent = content
    function handleClick() {
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
            axios.post('https://thepc.herokuapp.com/api/articles', qs.stringify(finalArticle), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Bearer ' + Cookie.get("auth")
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
            <div className="form-group">
                <Input type="input" name="title" placeholder="Article title" onChange={handleChange} className="dash-input" />
            </div>
            <div className="form-group">
                <select className="form-control" onChange={handleChange} name="articleType">
                    <option>--- Select Type of Article ---</option>
                    <option value="news">News Article</option>
                    <option value="movie">Movie Review</option>
                    <option value="editorial">Editorial</option>
                    <option value="satire">Satire</option>
                    <option value="facts">Facts</option>
                </select>
            </div>
            <div className="form-group">
                <Input type="text-area" name="content" placeholder="Article Content" rows="10" onChange={handleChange} className="dash-input" />
            </div>
            <Button classAdd={"btn-solid dash-input"} name={"Submit"} handleClick={handleClick} />
            {success === 201 ?
                <div className="alert alert-success alert-dismissible mt-2" role="alert">
                    Article Successfully Submitted
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                :
                success === 400 ?
                    <div className="alert alert-danger alert-dismissible mt-2" role="alert">
                        Please check your fields and try again!
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    :
                    success === 101 &&
                    <div className="alert alert-warning alert-dismissible mt-2" role="alert">
                        Please wait...
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
            }

        </div>
    )
}

export default SubmitForm;