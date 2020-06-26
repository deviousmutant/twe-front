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
    const [success,setSuccess] = React.useState();

    function handleChange(event) {
        const title = event.target.name
        const value = event.target.value
        title === "title" ? setTitle(value) : title === "articleType" ? setType(value) : setContent(value)

    }

    finalArticle.atitle = title
    finalArticle.atype = type
    finalArticle.acontent = content
    function handleClick() {
        setArticle(previous => !previous)
        console.log(finalArticle);

    }

    function funcSetSuccess(status)
    {
        setSuccess(status);
    }

    React.useEffect(() => {
        axios.post('http://thepc.herokuapp.com/api/articles', qs.stringify(finalArticle), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + Cookie.get("auth")
            }
        })
            .then(response => {
                console.log(response)
                funcSetSuccess(response.status);
                setTitle("")
                setContent("")

            })
            .catch(error => {
                console.log(error.response)
            });
    }, [article])

    return (
        <div>
            <div className="form-group">
                <Input type="input" name="title" placeholder="Article title" onChange={handleChange} />
            </div>
            <div className="form-group">
                <select className="form-control dropdown" onChange={handleChange} name="articleType">
                    <option>--- Select Type of Article ---</option>
                    <option value="news">News Article</option>
                    <option value="movie">Movie Review</option>
                    <option value="editorial">Editorial</option>
                    <option value="satire">Satire</option>
                    <option value="facts">Unspecified</option>
                </select>
            </div>
            <div className="form-group">
                <Input type="text-area" name="content" placeholder="Article Content" rows="10" onChange={handleChange} />
            </div>
            <Button classAdd={"btn-solid"} name={"Submit"} handleClick={handleClick} />
            {success=="201"&& 
            <div class="alert alert-success alert-dismissible" role="alert">
            Article Successfully Submitted
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
          </div>
            }

        </div>
    )
}

export default SubmitForm;