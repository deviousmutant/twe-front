import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import qs from 'qs'

function ApiCall(props) {
    const [response, setResponse] = useState({
        type: "",
        res: {}
    })
    const url = props.url
    const data = qs.stringify(props.data)
    console.log(url + data);

    useEffect(() => {
        axios.post("https://thepc.herokuapp.com/" + url, data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + Cookies.get("auth")
            }
        }).then(resp => {
            setResponse({
                type: "r",
                res: resp
            })
        }).catch(err => {
            setResponse({
                type: "e",
                res: err
            })
        })
    })

    return response

}

export default ApiCall;