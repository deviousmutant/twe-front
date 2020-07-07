import React, { useState, useEffect } from 'react'
import Card from './article-card'
import axios from 'axios'
import Cookies from 'js-cookie'

function Articles(props) {
    const [dataArr, setDataArr] = useState([]);
    const [loading, setLoading] = useState(true)
    const auth = Cookies.get("auth")


    function HandleOutput(data) {
        setLoading(false)
        setDataArr(data);
    }

    React.useEffect(() => {
        axios.get('https://thepc.herokuapp.com/api/articles/list?sortBy=createdAt:desc ', {
            headers: {
                'Authorization': 'Bearer ' + auth
            }
        })
            .then(response => {
                HandleOutput(response.data);
            })
            .catch(error => {
                console.log(error)
            })
    }, [])


    function createCard(articleItem) {
        return <Card title={articleItem.atitle} content={articleItem.acontent} articleID={articleItem._id} type={articleItem.atype}
            valid={props.valid} approvalStatus={articleItem.approved}
            author={articleItem.authorName}
        />
    }
    return (
        <div>
            {loading === true ?
                <div className="alert alert-warning alert-dismissible mt-2" role="alert">
                    Please wait...
                </div>
                :
                dataArr.length > 0 ?
                    <div className="card-columns" style={{ itemAlign: "top" }}>
                        {dataArr.map(createCard)}
                    </div>
                    :
                    <div className="alert alert-danger alert-dismissible mt-2" role="alert">
                        No Articles found!
                    </div>
            }
        </div>


    )
}

export default Articles;