import React, { useState, useEffect } from 'react'
import Card from './article-card'
import AllContent from './all-content'
import axios from 'axios'
import Cookies from 'js-cookie'
import qs from 'qs'

function AllArticles(props) {
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
        setStatusApprove(previous => !previous)
    }
    function HandleRemove(name, id) {
        setArticleID(id)
        setStatusRemoval(previous => !previous)
    }

    useEffect(() => {
        function HandleAPI() {
            let url = "https://thepc.herokuapp.com/api/articles/" + articleID
            axios.delete(url, {
                headers: {
                    'Authorization': 'Bearer ' + auth
                }
            }, qs.stringify({})).catch(error => {
                console.log(error);

            })
        }
        return HandleAPI()
    }, [statusRemoval])

    useEffect(() => {
        function HandleAPI() {
            let url = "https://thepc.herokuapp.com/api/articles/select/edition/" + articleID
            axios.patch(url, qs.stringify({
                approved: true,
                edition: Cookies.get("enum")
            }), {
                headers: {
                    'Authorization': 'Bearer ' + auth
                }
            }).then(response => {
                console.log(response);

            }).catch(error => {
                console.log(error);

            })
        }
        return HandleAPI()
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
                <AllContent HandleOutput={HandleOutput} />
            </div>
        </div>


    )
}

export default AllArticles;