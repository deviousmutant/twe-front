import React from 'react'
import Input from '../form/Input'
import Button from '../form/Button'
import axios from 'axios'
import qs from 'qs'
import Cookie from 'js-cookie'

function NewEdition() {
    const finalEdition = {
        enumber: "",
        enname: "",
        edesc: ""
    }
    const [editionTitle, setTitle] = React.useState();
    const [editionNumber, setNumber] = React.useState();
    const [editionDescription, setDesc] = React.useState();
    const [ready, setReady] = React.useState(false);
    const [success, setSuccess] = React.useState()


    function handleChange(event) {
        const title = event.target.name;
        const value = event.target.value;
        title === "title" ? setTitle(value) : title === "edno" ? setNumber(value) : setDesc(value);

    }

    finalEdition.ename = editionTitle;
    finalEdition.enumber = editionNumber;
    finalEdition.edesc = editionDescription;

    function handleClick() {
        setSuccess(101)
        setReady(true)
    }
    function HandleSuccess(status) {
        if (status === 400) {
            setReady(false)
        }
        setSuccess(status);
    }

    React.useEffect(() => {
        if (ready === true) {
            axios.post('https://thepc.herokuapp.com/api/edition/create/', qs.stringify(finalEdition), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Bearer ' + Cookie.get("auth")
                }
            })
                .then(response => {
                    Cookie.set("enumber", finalEdition.enumber)
                    HandleSuccess(response.status)

                })
                .catch(error => {
                    console.log(error.response)
                });
        }
    }, [ready])


    return (
        <div>
            <Input type="input" name="title" placeholder="Title" rows="1" onChange={handleChange} className="dash-input" />
            <Input type="input" name="edno" placeholder="Edition Number" rows="1" onChange={handleChange} className="dash-input" />
            <Input type="text-area" name="edesc" placeholder="Edition Description (50-60 words)" rows="5" onChange={handleChange} className="dash-input" />
            <Button classAdd={"btn-solid dash-input"} name={"Submit"} handleClick={handleClick} />
            {success === 201 ?
                <div className="alert alert-success alert-dismissible mt-2" role="alert">
                    New Edition {editionNumber} created!
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

export default NewEdition