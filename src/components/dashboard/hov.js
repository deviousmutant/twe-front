import React, { useState } from 'react'
import Input from '../form/Input'
import Button from '../form/Button'
import axios from 'axios'
import Cookies from 'js-cookie'
import qs from 'qs'

function Hov() {
    let finalLink = {
        hov: ""
    };
    const [link, setLink] = useState();
    const [ready, setReady] = useState(false)
    const [success, setSuccess] = useState()

    function handleChange(event) {
        const value = event.target.value;
        setLink(value);
    }

    function HandleSuccess(status) {
        if (status === 400) {
            setReady(false)
        }
        setSuccess(status);
    }
    React.useEffect(() => {
        if (ready === true) {
            axios.patch("https://thepc.herokuapp.com/api/edition/adminhovpost/" + Cookies.get("enumber"), qs.stringify(finalLink), {
                headers: {
                    'Authorization': 'Bearer ' + Cookies.get("auth"),
                    'Content-type': 'application/x-www-form-urlencoded'
                }
            }).then(response => {
                HandleSuccess(response.status)
            }).catch(error => console.log(error))
        }
    }, [ready])

    finalLink.hov = link;

    function handleClick() {
        setSuccess(101)
        setReady(true)
    }

    return (
        <div>
            <div className="form-group">
                <Input type="input" name="title" placeholder="Youtube Link" onChange={handleChange} className="dash-input" />
            </div>
            <Button classAdd={"btn-solid dash-input"} name={"Submit"} handleClick={handleClick} />
            {success === 200 ?
                <div className="alert alert-success alert-dismissible mt-2" role="alert">
                    Humans Of VIT Successfully Submitted
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                :
                success === 400 ?
                    <div className="alert alert-danger alert-dismissible mt-2" role="alert">
                        Please check your field and try again!
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

export default Hov;