import React, { useState, useEffect } from 'react'
import Card from './article-card'
import Content from './content'
import axios from 'axios'
import Cookies from 'js-cookie'
import qs from 'qs'

function Articles(props) {
    const [dataArr, setDataArr] = useState([]);
    const auth = Cookies.get("auth")
    const [statusRemoval, setStatusRemoval] = useState(false)
    const [statusApprove, setStatusApprove] = useState(false)
    const [articleID, setArticleID] = useState("")

    function HandleOutput(data) {
        setDataArr(data);
    }
    function HandleApprove(name, id) {
        setArticleID(id)
        setStatusApprove(true)

    }
    function HandleRemove(name, id) {
        setArticleID(id)
        setStatusRemoval(true)

    }

    useEffect(() => {
        if (statusRemoval === true) {
            let url = "https://thepc.herokuapp.com/api/articles/" + articleID
            axios.delete(url, {
                headers: {
                    'Authorization': 'Bearer ' + auth
                }
            }, qs.stringify({})).catch(error => {
                console.log(error);

            }).finally(() => {
                setStatusRemoval(false)
            })
        }
    }, [statusRemoval])

    useEffect(() => {
        if (statusApprove === true) {
            let url = "https://thepc.herokuapp.com/api/articles/select/edition/" + articleID
            axios.patch(url, qs.stringify({
                approved: true,
                edition: Cookies.get("enum")
            }), {
                headers: {
                    'Authorization': 'Bearer ' + auth
                }
            }).catch(error => {
                console.log(error);

            })
        }
    }, [statusApprove])


    function createCard(articleItem) {
        return <Card title={articleItem.atitle} content={articleItem.acontent} articleID={articleItem._id}
            HandleApprove={HandleApprove} HandleRemove={HandleRemove} valid={props.valid} approvalStatus={articleItem.approved}
        />
    }
    return (
        <div>
            <div className="card-columns" style={{ itemAlign: "top" }}>
                {dataArr.map(createCard)}
                <Content HandleOutput={HandleOutput} />
            </div>
        </div>


    )
}

export default Articles;