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
    React.useEffect(() => {
        axios.post('http://thepc.herokuapp.com/api/articles', qs.stringify(finalArticle), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + Cookie.get("auth")
            }
        })
            .then(response => {
                console.log(response)
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
                    <option value="ed">Editorial</option>
                    <option value="satire">Satire</option>
                    <option value="misc">Unspecified</option>
                </select>
            </div>
            <div className="form-group">
                <Input type="text-area" name="content" placeholder="Article Content" rows="10" onChange={handleChange} />
            </div>
            <Button classAdd={"btn-solid"} name={"Submit"} handleClick={handleClick} />

        </div>
    )
}

export default SubmitForm;